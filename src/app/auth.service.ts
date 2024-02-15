export class AuthService{

    isLoggedIn = false

    isAuthenticated(){
        const promise = new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(this.isLoggedIn)
            },800)
        })
        return promise
    }

    loggedIn(){
        this.isLoggedIn = true
    }

    loggedOut(){
        this.isLoggedIn = false
    }

}