import * as types from "../constants/ActionTypes";
import axios from "axios";

const API_URL = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&outSR=102100&resultOffset=0&resultRecordCount=100&cacheHint=true&fbclid=IwAR3WOSOjHOo31y7U4vctHZ_vn_gC-58UrU3vwRuCNpcawt0Lk9MPuQ0bLOc";

export const fetchApiData = () => {
  return async dispatch => {
    setLoading();

    const resp = await axios.get(API_URL);
    const data = await resp.data;

    dispatch({ type: types.FETCH_RUNTIME_DATA, payload: data });
  };
};

export const setLoading = () => {
  return {
    type: types.SET_LOADING
  };
};
