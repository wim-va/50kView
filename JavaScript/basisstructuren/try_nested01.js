try {
  try {
    throw new Error("oops");
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.log("outer", ex.message);
}