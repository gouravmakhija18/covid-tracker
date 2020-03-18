import React, { useEffect } from "react";
import { connect } from "react-redux";

import CardList from "./CardList";
import { fetchApiData } from "../actions/index";
import Spinner from "./Spinners";

const Card = ({ covid19: { apiResponseObj, loading }, fetchApiData }) => {
  useEffect(() => {
    fetchApiData();
    //eslint-disable-next-line
  }, []);

  if (loading || apiResponseObj === null) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="card-list">
        {apiResponseObj.features.map((item, index) => {
          return <CardList key={index} apiResponseObj={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    covid19: state.covid19
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchApiData: () => {
      dispatch(fetchApiData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
