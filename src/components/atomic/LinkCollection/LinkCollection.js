import React from "react";
import { List, Button } from "antd";
import PropTypes from "prop-types";

function LinkCollection(props) {
  const { linkCollection, ...other } = props;

  const renderItem = (item) => {
    return (
      <List.Item>
        <Button rel="noopener" block target="_blank" href={item.link}>
          {item.label}
        </Button>
      </List.Item>
    );
  };

  return (
    <List renderItem={renderItem} dataSource={linkCollection} {...other} />
  );
}

LinkCollection.propTypes = {
  linkCollection: PropTypes.array,
};

LinkCollection.defaultProps = {
  linkCollection: [
    { label: "Registro Debatientes", link: "aaa" },
    { label: "Registro Jueces", link: "aaa" },
    { label: "Convocatoria", link: "aaa" },
  ],
};

export default LinkCollection;
