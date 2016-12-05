import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { Map } from 'immutable'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new Map({}))

// const defaultComments = normalizedComments.reduce((acc, comment) => ({
//     ...acc, [comment.id]: comment
// }), {})

export default (comments = defaultComments, action) => {
    const { type, payload, response, error, generateId } = action

    switch (type) {
        case ADD_COMMENT:
            let newComments = comments.set(generateId, {
                id: generateId,
                text: payload.comment.text,
                user: payload.comment.user
            })

            // let newComments = {...comments, [generateId]: {
            //     id: generateId,
            //     text: payload.comment.text,
            //     user: payload.comment.user}
            // }
            console.log(comments.toJS(), newComments.toJS())
            return newComments

    }

    return comments
}
