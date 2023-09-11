// code your solution here
// `saturdayFun` function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // `mondayWork` function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // `wrapAdjective` function
  function wrapAdjective(emphasis = "*") {
    return function(adjective) {
      return `You are ${emphasis}${adjective}${emphasis}!`;
    };
  }
  
  module.exports = { saturdayFun, mondayWork, wrapAdjective };
  