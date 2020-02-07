module.exports = function(cbDebug, cbStd) {
    if (require.main === module.parent) {
        if ((typeof v8debug === 'object') ||
            (/--debug|--inspect/.test(process.execArgv.join(' ')))) {
            cbDebug();
        } else {
            cbStd();
        }
    }
};
