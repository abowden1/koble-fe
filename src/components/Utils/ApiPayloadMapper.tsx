// export function SquadApiPayloadMapper(squad: Squad): SquadApi {
//     return {
//         id: squad.id,
//         name: squad.name,
//         users: squad.users ? UserApiPayloadMapper(squad.users) : undefined
//     }
// }
//
// export function UserApiPayloadMapper(user: User): UserApi {
//     return {
//         id: user.id,
//         squad_id: user.squadId,
//         first_name: user.firstName,
//         last_name: user.lastName,
//         preferred_name: user.preferredName,
//         email: user.email,
//         phone_number: user.phoneNumber,
//         photo_url: user.photoUrl,
//         categories: user.categories ? CategoriesApiPayloadMapper(user.categories) : undefined,
//         squad: user.squad ? SquadApiPayloadMapper(user.squad) : undefined
//     }
// }
//
// export function UsersApiPayloadMapper(users: User[]): UserApi[] {
//     return users.map(user => (
//         {
//             id: user.id,
//             squad_id: user.squadId,
//             first_name: user.firstName,
//             last_name: user.lastName,
//             preferred_name: user.preferredName,
//             email: user.email,
//             phone_number: user.phoneNumber,
//             photo_url: user.photoUrl,
//             categories: user.categories ? CategoriesApiPayloadMapper(user.categories) : undefined,
//             squad: user.squad ? SquadApiPayloadMapper(user.squad) : undefined
//         }
//     ))
// }
//
// export function CategoryApiPayloadMapper(category: Category): CategoryApi {
//     return {}
// }
//
// export function CategoriesApiPayloadMapper(categories: Category[]): CategoryApi[] {
//     return categories.map(category => (
//         {}
//     ))
// }
//
// export function ContactApiPayloadMapper(contact: Contact): ContactApi {
//     return {}
// }
//
// export function ContactsApiPayloadMapper(contacts: Contact[]): ContactApi[] {
//     return contacts.map(contact => (
//         {}
//     ))
// }
//
// export function ContactFieldApiPayloadMapper(field: ContactField): ContactFieldApi {
//     return {}
// }
//
// export function ContactFieldsApiPayloadMapper(contactFields: ContactField[]): ContactFieldApi[] {
//     return contactFields.map(field => (
//         {}
//     ))
// }