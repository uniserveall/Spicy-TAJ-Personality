{
    if(tryRunOrgasmFetchId()) {
        setTempVar(VARIABLE.ORGASM_CATEGORY_TODAY, ORGASM_CATEGORY_ALLOWED);
        run('Session/Orgasm/All/AllOrgasm4.js');
    }
}