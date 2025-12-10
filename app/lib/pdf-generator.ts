import jsPDF from 'jspdf'
import type { AssessmentResults } from './scoring'

export const generatePDF = (results: AssessmentResults, name: string) => {
  const doc = new jsPDF()
  
  doc.setFontSize(20)
  doc.text('Engineering Assessment Results', 20, 20)
  
  if (name) {
    doc.setFontSize(14)
    doc.text(`Name: ${name}`, 20, 35)
  }
  
  doc.setFontSize(12)
  doc.text(`Average Stage: ${results.averageStage.toFixed(1)}`, 20, 50)
  doc.text(`Overall Maturity: ${results.overallMaturity}`, 20, 60)
  
  let yPos = 80
  doc.setFontSize(14)
  doc.text('Competency Scores:', 20, yPos)
  yPos += 10
  
  doc.setFontSize(10)
  results.competencyScores.forEach((score) => {
    doc.text(`${score.name}: Level ${score.level}`, 20, yPos)
    yPos += 7
    if (yPos > 280) {
      doc.addPage()
      yPos = 20
    }
  })
  
  doc.save(`assessment-results-${name || 'anonymous'}.pdf`)
}

