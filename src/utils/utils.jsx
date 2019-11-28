const ConverteDataBr = (dataUs) => {
    const dataArray = dataUs.split('-')
    const dataBr = dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0]
    return dataBr
}

export { ConverteDataBr }
