type LengthUnit = 'cm' | 'm' | 'in' | 'ft'
type MassWeightUnit = 'g' | 'kg' | 'oz' | 'lb'
export type Unit = LengthUnit | MassWeightUnit

const convertLength = (value: number, from: LengthUnit, to: LengthUnit): number | null => {
  // From: cm
  if (from === 'cm') {
    if (to === 'm') return value * 0.01
    if (to === 'in') return value / 2.54
    if (to === 'ft') return value / 30.48
  }
  // From: m
  if (from === 'm') {
    if (to === 'cm') return value * 100
    if (to === 'in') return value * 39.3701
    if (to === 'ft') return value * 3.28084
  }
  // From: in
  if (from === 'in') {
    if (to === 'cm') return value * 2.54
    if (to === 'm') return value / 39.3701
    if (to === 'ft') return value / 12
  }
  // From: ft
  if (from === 'ft') {
    if (to === 'cm') return value * 30.48
    if (to === 'm') return value / 3.28084
    if (to === 'in') return value * 12
  }
  return null
}

const convertMassWeight = (value: number, from: Unit, to: Unit): number | null => {
  // From g
  if (from === 'g') {
    if (to === 'kg') return value / 1000
    if (to === 'oz') return value / 28.35
    if (to === 'lb') return value / 454
  }
  // From kg
  if (from === 'kg') {
    if (to === 'g') return value * 1000
    if (to === 'oz') return value * 35.274
    if (to === 'lb') return value * 2.205
  }
  // From oz
  if (from === 'oz') {
    if (to === 'g') return value * 28.35
    if (to === 'kg') return value / 35.274
    if (to === 'lb') return value / 16
  }
  // From lb
  if (from === 'lb') {
    if (to === 'g') return value * 454
    if (to === 'kg') return value / 2.205
    if (to === 'oz') return value * 16
  }

  return null
}

/**
 * Convert number between units, e.g. from grams to kilograms
 * @param value the number to convert
 * @param from Source unit
 * @param to Destination unit
 * @category number
 * @module convertNumberBetweenMeasurementUnits
 */
const convertNumberBetweenMeasurementUnits = (value: number, from: Unit, to: Unit): number => {
  const lengthValue = convertLength(value, from as LengthUnit, to as LengthUnit)
  if (lengthValue) return lengthValue

  const massWeightValue = convertMassWeight(value, from as MassWeightUnit, to as MassWeightUnit)
  if (massWeightValue) return massWeightValue

  return value
}

export default convertNumberBetweenMeasurementUnits