console.log('User profile')
interface BaseUser {
    id: number,
    userName: string,
    email: string
}

interface GuestUser extends BaseUser {
    guestSessionId: number
}

interface RegisteredUser extends BaseUser {
    profile: string,
    lastLogini: string
}

type User = {
    regUser: RegisteredUser
}

let regUser: RegisteredUser = {
    profile: "prof1",
    lastLogini: "aaa",
    id: 1111,
    userName: "ydudai",
    email: "ydudai@outlook.com"
}
let user: User = {
    regUser: regUser
}

/**
 * Display User Info
 * @param user 
 */
function displayUserInfo(user: User): void {
    console.log(user)
}
displayUserInfo(user)


/**
 * Update a registered User Profile 
 * @param regUser 
 * @param newPprofile 
 */
function updateUserProfile(regUser: RegisteredUser, newPprofile: string): void {
    regUser.profile = newPprofile
}
updateUserProfile(regUser, "prof-2")
console.log(regUser)