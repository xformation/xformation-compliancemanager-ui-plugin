import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { ComplianceExclusions } from "../../pages/ComplianceExclusions";
import { ComplianceRulesets } from "../../pages/ComplianceRulesets";
import { ComplianceRemediation } from "../../pages/ComplianceRemediation";
import { ComplianceAssessmentHistory } from "../../pages/ComplianceAssessmentHistory";
import { CompliancePolicy } from "../../pages/CompliancePolicy";
import { ComplianceHistory } from "../../pages/ComplianceHistory";
import { GslBuilder } from "../../pages/GslBuilder";
import { ApiGateway } from "../../pages/ApiGateway";
import { EditorGslBuilder } from "../../pages/EditorGslBuilder";
import { ClearHistory } from "../../pages/ClearHistory";
import { Script } from "../../pages/Script";
import { useNavigation, prefixRoute } from "../../utils/utils.routing";
import { ROUTES } from "../../constants";

export const Routes = () => {
  useNavigation();

  return (
    <Switch>
      <Route exact path={prefixRoute(ROUTES.Dashboard)} component={Dashboard} />
      <Route exact path={prefixRoute(ROUTES.ComplianceExclusions)} component={ComplianceExclusions} />
      <Route exact path={prefixRoute(ROUTES.ComplianceRulesets)} component={ComplianceRulesets} />
      <Route exact path={prefixRoute(ROUTES.ComplianceRemediation)} component={ComplianceRemediation} />
      <Route exact path={prefixRoute(ROUTES.ComplianceAssessmentHistory)} component={ComplianceAssessmentHistory} />
      <Route exact path={prefixRoute(ROUTES.CompliancePolicy)} component={CompliancePolicy} />
      <Route exact path={prefixRoute(ROUTES.ComplianceHistory)} component={ComplianceHistory} />
      <Route exact path={prefixRoute(ROUTES.GslBuilder)} component={GslBuilder} />
      <Route exact path={prefixRoute(ROUTES.ApiGateway)} component={ApiGateway} />
      <Route exact path={prefixRoute(ROUTES.EditorGslBuilder)} component={EditorGslBuilder} />
      <Route exact path={prefixRoute(ROUTES.ClearHistory)} component={ClearHistory} />
      <Route exact path={prefixRoute(ROUTES.Script)} component={Script} />
    </Switch>
  );
};
