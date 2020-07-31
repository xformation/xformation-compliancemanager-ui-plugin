import init from "../domain/CompliancePolicyApp";

export class CompliancePolicy {
  static templateUrl = "/partials/compliance.html";
  constructor() {
    init();
  }
}
