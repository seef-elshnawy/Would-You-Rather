export const SETAUTH_USER='SETAUTH_USER'
export const LOG_OUT='LOG_OUT'

/*in this action we need to authUser to know who user is authenicate*/
export function authUser(user){
return{
    type:SETAUTH_USER,
    user
}
}
/*in this action we need to log-out function to set authUser null*/
export function logOut(logout){
    return{
        type:LOG_OUT,
        logout
    }
}