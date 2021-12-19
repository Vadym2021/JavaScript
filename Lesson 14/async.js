wakeUp = (isAwake, callback) => {
    setTimeout(() => {
        if (isAwake) {
            callback(null, 'I woke up')
        } else {
            callback('Sweet dreams', null)
        }

    }, 500)


}

cleanTeeth = (ready, callback) => {
    setTimeout(() => {
        if (ready) {
            callback(null, 'Tooth clean')
        } else {
            callback('Sweet dreams', null)
        }
    }, 1000)

}

haveBreakfast = (ready, callback) => {
    setTimeout(() => {
        if (ready) {
            callback(null, 'Breakfast was eaten')
        } else {
            callback('Sweet dreams', null)
        }
    }, 2000)

}

getDressed = (ready, callback) => {
    setTimeout(() => {
        if (ready) {
            callback(null, 'Clothes weared')
        } else {
            callback('Sweet dreams', null)
        }

    }, 800)

}

goToWork = (ready, callback) => {
    setTimeout(() => {
        if (ready) {
            callback(null, 'Going to work, ETA ... Driving time')
        } else {
            callback('Sweet dreams', null)
        }
    }, 3000)

}

workProcess = (ready, callback) => {
    setTimeout(() => {
        if (ready) {
            callback(null, 'Work work')
        } else {
            callback('Sweet dreams', null)
        }

    }, 5000)

}

lunchTime = (ready, callback) => {
    setTimeout(() => {
        if (ready) {
            callback(null, 'Lunch coffe break')
        } else {
            callback('Sweet dreams', null)
        }

    }, 1200)

}


wakeUp(true, (err, next) => {
    if (err) {
        console.log(err)
    } else {
        console.log(next)
        cleanTeeth(true, (err1, next1) => {
            if (err1) {
                console.log(err1)
            } else {
                console.log(next1)
                haveBreakfast(true, (err2, next2) => {
                    if (err2) {
                        console.log(err2)
                    } else {
                        console.log(next2)
                        getDressed(true, (err3, next3) => {
                            if (err3) {
                                console.log(err3)
                            } else {
                                console.log(next3)
                                goToWork(true, (err4, next4) => {
                                    if (err4) {
                                        console.log(err4)
                                    } else {
                                        console.log(next4)
                                        workProcess(true, (err5, next5) => {
                                            if (err5) {
                                                console.log(err5)
                                            } else {
                                                console.log(next5)
                                                lunchTime(true, (err6, next6) => {
                                                    if (err6) {
                                                        console.log(err6)
                                                    } else {
                                                        console.log(next6)

                                                    }

                                                })
                                            }

                                        })
                                    }

                                })
                            }

                        })
                    }

                })
            }
        })
    }
})

wakeUp2 = (isAwake) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isAwake) {
                resolve('I woke up')
            } else {
                reject('Sweet dreams')
            }
        }, 500)
    })
}

cleanTeeth2 = (ready) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ready) {
                resolve('Tooth clean')
            } else {
                reject('Sweet dreams')
            }
        }, 1000)
    })
}

haveBreakfast2 = (ready) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ready) {
                resolve('Breakfast was eaten')
            } else {
                reject('Sweet dreams')
            }
        }, 2000)
    })
}

getDressed2 = (ready) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ready) {
                resolve('Clothes weared')
            } else {
                reject('Sweet dreams')
            }
        }, 800)
    })

}

goToWork2 = (ready) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ready) {
                resolve('Going to work, ETA ... Driving time')
            } else {
                reject('Sweet dreams')
            }
        }, 3000)
    })
}

workProcess2 = (ready) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ready) {
                resolve('Work work')
            } else {
                reject('Sweet dreams')
            }
        }, 5000)
    })
}

lunchTime2 = (ready) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ready) {
                resolve('Lunch coffe break')
            } else {
                reject('Sweet dreams')
            }
        }, 1200)
    })

}

wakeUp2(true)
    .then(next => {
        console.log(next)
        return cleanTeeth2(true)
    })
    .then(next => {
        console.log(next)
        return haveBreakfast2(true)
    })
    .then(next => {
        console.log(next)
        return getDressed2(true)
    })
    .then(next => {
        console.log(next)
        return goToWork2(true)
    })
    .then(next => {
        console.log(next)
        return workProcess2(true)
    })
    .then(next => {
        console.log(next)
        return lunchTime2(true)
    })
    .then(next => {
        console.log(next)
    })


async function workday() {
    try {
        const next1 = await wakeUp2(true)
        const next2 = await cleanTeeth2(true)
        const next3 = await haveBreakfast2(true)
        const next4 = await getDressed2(true)
        const next5 = await goToWork2(true)
        const next6 = await workProcess2(true)
        const next7 = await lunchTime2(true)

        console.log(next1)
        console.log(next2)
        console.log(next3)
        console.log(next4)
        console.log(next5)
        console.log(next6)
        console.log(next7)
    } catch (e) {
        console.error(e)
    }
}


workday()