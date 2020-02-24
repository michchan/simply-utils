import validateCaseInsensitiveKey from './validateCaseInsensitiveKey'
import isArr from '../array/isArr'

type ReturnType<FieldType extends string, TargetType extends FieldType> = (type: FieldType) => type is TargetType

/**
 * Create a validator of the case-insensitive key
 * 
 * e.g. const isStatusDraft = createKeyValidator<PublishableStatus, StatusDraft>(STATUS_DRAFT)
 * 
 * @param target Target string constant, or array of validators.
 */
function createKeyValidator<FieldType extends string, TargetType extends FieldType> (
    target: TargetType | ReturnType<FieldType, TargetType>[]
): ReturnType<FieldType, TargetType> {
    return (type: FieldType): type is TargetType => {
        if (isArr<ReturnType<FieldType, TargetType>[]>(target)) {
            return target.some(validate => {
                return validate(type)
            })
        } else {
            return validateCaseInsensitiveKey(target as string, type)
        }
    }
}

export default createKeyValidator