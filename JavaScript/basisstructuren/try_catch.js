try {
    // uitvoering van onderstaand stmt veroorzaakt een fout ...
    console.Log("Op deze lijn loopt het mis ...");
    console.log("dit bericht zullen we niet te zien krijgen");
}
catch (err)
// ... die hier opgevangen wordt 
{
    console.log("Volgende fout heeft zich voorgedaan op deze pagina:");
    console.log(err.name + ": " + err.message );
}
console.log("'t Is gedaan.");