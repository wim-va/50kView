try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
    return;
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

/*
If the finally block returns a value, this value becomes the return value 
of the entire try-catch-finally production, regardless of any return statements 
in the try and catch blocks. This includes exceptions thrown inside of the catch block.
*/