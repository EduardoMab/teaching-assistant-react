// server/src/models/Statistics.ts
export class Statistics {
  public meanGrade: number;                    // average score
  public enrolled: number;                     // total number of enrolled students
  public approved: number;                     // number of students who passed
  public failedByGrade: number;                // number of students who failed by grade
  public failedByAbsence: number;              // number of students who failed by absence
  private lastUpdated?: string;                 // ISO date string

  constructor(
    meanGrade: number = 0,
    enrolled: number = 0,
    approved: number = 0,
    failedByGrade: number = 0,
    failedByAbsence: number = 0,
    lastUpdated?: string
  ) {
    this.meanGrade = meanGrade;
    this.enrolled = enrolled;
    this.approved = approved;
    this.failedByGrade = failedByGrade;
    this.failedByAbsence = failedByAbsence;
    this.lastUpdated = lastUpdated;
  }
}

/**
 * Lightweight runtime check
 */
export const isStatistics = (v: any): v is Statistics =>
  !!v &&
  typeof v.meanGrade === 'number' &&
  typeof v.enrolled === 'number' &&
  typeof v.approved === 'number' &&
  typeof v.failedByGrade === 'number' &&
  typeof v.failedByAbsence === 'number';