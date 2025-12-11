import { Competency } from './competencies/types'
import { codeQuality } from './competencies/code-quality'
import { systemDesign } from './competencies/system-design'
import { collaboration } from './competencies/collaboration'
import { debugging } from './competencies/debugging'
import { testing } from './competencies/testing'
import { dataDriven } from './competencies/data-driven'
import { technicalDocumentation } from './competencies/technical-documentation'
import { continuousImprovement } from './competencies/continuous-improvement'
import { security } from './competencies/security'
import { impact } from './competencies/impact'
import { performance } from './competencies/performance'

export * from './competencies/types'

export const COMPETENCIES: Competency[] = [
  codeQuality,
  systemDesign,
  collaboration,
  debugging,
  testing,
  dataDriven,
  technicalDocumentation,
  continuousImprovement,
  security,
  impact,
  performance,
]
