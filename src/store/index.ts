import { ActionTree, createStore, MutationTree } from "vuex";

import { IProduct, RootState } from "@/interfaces/interfaces";
import { ProductsApi } from "@/API";
import { limitToFirst } from "@/const";

const state: RootState = {
  products: [] as IProduct[],
  products_end: false,
  product: {} as IProduct,
}

const mutations:MutationTree<RootState> = {
  ADD_PRODUCT(s: RootState, product: IProduct) {
    s.products.push(product);
  },
  SET_PRODUCTS(s: RootState, products: IProduct[]) {
    s.products = [...s.products, ...products];
  },
  SET_PRODUCTS_END(s: RootState, payload: boolean) {
    s.products_end = payload;
  },
  SET_PRODUCT(s: RootState, product: IProduct) {
    s.product = product;
  },
}

const actions: ActionTree<RootState, RootState> = {
  async addProduct({ commit, dispatch }, product: IProduct) {
    return ProductsApi.addProduct(product)
      .then(() => {
        commit("ADD_PRODUCT", product);
      })
      .catch((error) => {
        const notification = {
          id: "",
          type: "error",
          message: "There was a problem:" + error,
        };
        dispatch("notifications/add", notification, { root: true });
      });
  },
  setProducts({ state, commit, dispatch }) {
    let startAt = "";

    if (state.products.length) {
      startAt = "&startAt=" + state.products[state.products.length - 1].id;
    }

    ProductsApi.fetchProducts(startAt)
      .then((data) => {
        let products = data.filter((item) => item !== null);
        if (products.length < limitToFirst) {
          commit("SET_PRODUCTS_END", true);
        }
        if (state.products.length) {
          products = products.slice(1, products.length);
        }
        
        commit("SET_PRODUCTS", products);
      })
      .catch((error) => {
        const notification = {
          id: "",
          type: "error",
          message: "There was a problem:" + error,
        };
        dispatch("notifications/add", notification, { root: true });
      });
  },

  setProduct({ commit, getters }, id: string) {
    const product = getters.getProductById(id);
    if (product) {
      commit("SET_PRODUCT", product);
    } else {
      ProductsApi.fetchProduct(id)
        .then((data) => {
          commit("SET_PRODUCT", data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
}

export const store =  createStore({
  state,
  mutations,
  actions,
  modules: {},
  getters: {
    getProductLength: (s) => s.products.length
  }
});
