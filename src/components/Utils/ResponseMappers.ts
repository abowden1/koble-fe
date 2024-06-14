export function SquadResponseMapper(squad: SquadResponse): Squad {
    return {
        id: squad.id,
        name: squad.name,
        active: squad.active,
        users: squad.users ? UsersResponseMapper(squad.users) : undefined
    }
}

export function UserResponseMapper(user: UserResponse): User {
    return {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            preferredName: user.preferred_name,
            email: user.email,
            phoneNumber: user.phone_number,
            photoUrl: user.photo_url,
            active: user.active
        }
}
export function UsersResponseMapper(users: UserResponse[]): User[] {
    return users.map(user => (
        {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            preferredName: user.preferred_name,
            email: user.email,
            phoneNumber: user.phone_number,
            photoUrl: user.photo_url,
            active: user.active,
            categories: user.categories ? CategoriesResponseMapper(user.categories) : undefined,
            contacts: user.contacts ? ContactsResponseMapper(user.contacts) : undefined,
            squad: user.squad ? SquadResponseMapper(user.squad) : undefined
        }
    ))
}

export function CategoryResponseMapper(category: CategoryResponse): Category {
    return {
            id: category.id,
            userId: category.user_id,
            category: category.category,
            active: category.active,
            contacts: category.contacts ? ContactsResponseMapper(category.contacts) : undefined,
            user: category.user ? UserResponseMapper(category.user) : undefined
        }
}

export function CategoriesResponseMapper(categories: CategoryResponse[]): Category[] {
    return categories.map(category => (
        {
            id: category.id,
            userId: category.user_id,
            category: category.category,
            active: category.active,
            contacts: category.contacts ? ContactsResponseMapper(category.contacts) : undefined,
            user: category.user ? UserResponseMapper(category.user) : undefined
        }
    ))
}

export function ContactResponseMapper(contact: ContactResponse): Contact {
    return {
            id: contact.id,
            userId: contact.user_id,
            categoryId: contact.category_id,
            name: contact.name,
            email: contact.email,
            phoneNumber: contact.phone_number,
            photoUrl: contact.photo_url,
            active: contact.active,
            contactFields: contact.fields ? ContactFieldsResponseMapper(contact.fields) : undefined,
            user: contact.user ? UserResponseMapper(contact.user) : undefined,
            category: contact.category ? CategoryResponseMapper(contact.category) : undefined // TODO
        }
}
export function ContactsResponseMapper(contacts: ContactResponse[]): Contact[] {
    return contacts.map(contact => (
        {
            id: contact.id,
            userId: contact.user_id,
            categoryId: contact.category_id,
            name: contact.name,
            email: contact.email,
            phoneNumber: contact.phone_number,
            photoUrl: contact.photo_url,
            active: contact.active,
            contactFields: contact.fields ? ContactFieldsResponseMapper(contact.fields) : undefined, // TODO
            user: contact.user ? UserResponseMapper(contact.user) : undefined,
            category: contact.category ? CategoryResponseMapper(contact.category) : undefined // TODO
        }
    ))
}

export function ContactFieldResponseMapper(field: ContactFieldResponse): ContactField {
    return {
            id: field.id,
            contactId: field.contact_id,
            key: field.key,
            value: field.value,
            active: field.active,
            contact: field.contact ? ContactResponseMapper(field.contact) : undefined
        }
}

export function ContactFieldsResponseMapper(contactFields: ContactFieldResponse[]): ContactField[] {
    return contactFields.map(field => (
        {
            id: field.id,
            contactId: field.contact_id,
            key: field.key,
            value: field.value,
            active: field.active,
            contact: field.contact ? ContactResponseMapper(field.contact) : undefined
        }
    ))
}