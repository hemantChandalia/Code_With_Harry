 // const tim = setInterval((myTimer,1000)=> {
    // })
    // let counter = 0;
    const tim = setInterval((myTimer) => {
        const d = new Date()
        const h = d.getHours()
        const m = d.getMinutes()
        const s = d.getSeconds()
        const z = `${h}:${m}:${s}`
        console.log(z);


        
    },1000);