
exports.replaceHydrateFunction = () => {
    return (element, container, callback) => {
      console.log("rendering!");
      ReactDOM.render(element, container, callback);
    };
  };