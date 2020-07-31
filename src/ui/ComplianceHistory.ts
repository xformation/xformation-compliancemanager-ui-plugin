import init from "../domain/ComplianceHistoryApp";

export class ComplianceHistory {
  static templateUrl = "/partials/compliance.html";
  constructor() {
    init();
  }
}
