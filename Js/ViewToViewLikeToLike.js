export function fromLikeToShortLike(view){
    const views = [
        {
            count:4,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const  secondLetter = String(view)[1]
                return str = `${firtLetter}.${secondLetter}K`
                
            }
        },
        {
            count:5,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const secondLetter = String(view)[1]
                const thirdLetter = String(view)[2]
                return str = `${firtLetter}${secondLetter}.${thirdLetter}K`
            }
           
        },
        {
            count:6,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const secondLetter = String(view)[1]
                const thirdLetter = String(view)[2]
                const fourtLetter = String(view)[3]
                return str = `${firtLetter}${secondLetter}${thirdLetter}.${fourtLetter}K`
            }
        },
        {
            count:7,
            do(){
                let str;
                const firtLetter = String(view)[0]
                 return str = `${firtLetter}M`
            }
        },
        {
            count:8,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const secondLetter = String(view)[1]
                return str = `${firtLetter}${secondLetter}M`

            }
        },
        {
            count:9,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const secondLetter = String(view)[1]
                const thirdLetter = String(view)[2]
                return str = `${firtLetter}${secondLetter}${thirdLetter}M`
            }
        }
    ]
    const match = views.find(el => el.count === String(view).length);
    return match ? match.do() : view;
}

export function fromViewToShortView(view){
    const views = [
        {
            count:4,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const  secondLetter = String(view)[1]
                return str = `${firtLetter}.${secondLetter}K views`
                
            }
        },
        {
            count:5,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const secondLetter = String(view)[1]
                const thirdLetter = String(view)[2]
                return str = `${firtLetter}${secondLetter}.${thirdLetter}K views`
            }
           
        },
        {
            count:6,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const secondLetter = String(view)[1]
                const thirdLetter = String(view)[2]
                const fourtLetter = String(view)[3]
                return str = `${firtLetter}${secondLetter}${thirdLetter}.${fourtLetter}K views`
            }
        },
        {
            count:7,
            do(){
                let str;
                const firtLetter = String(view)[0]
                 return str = `${firtLetter}M views`
            }
        },
        {
            count:8,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const secondLetter = String(view)[1]
                return str = `${firtLetter}${secondLetter}M views`

            }
        },
        {
            count:9,
            do(){
                let str;
                const firtLetter = String(view)[0]
                const secondLetter = String(view)[1]
                const thirdLetter = String(view)[2]
                return str = `${firtLetter}${secondLetter}${thirdLetter}M views`
            }
        },
        {
            count:10,
            do(){
                let str;
                const firtLetter = String(view)[0]
                return str = `${firtLetter}B views`
            }
        }
    ]
    const match = views.find(el => el.count === String(view).length);
    return match ? match.do() : view;
}