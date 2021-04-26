const IP = "100.64.108.25";

const searchSrvUrl = `http://100.64.108.25:8092`;
const policySrvUrl = `http://100.64.108.25:8098`;
const dynModelUrl = `http://100.64.108.25:8099`;
const securitySrvUrl = `http://100.64.108.25:8094`;
const catalogSrvUrl = `http://${IP}:4000/api`;

export const config = {
  basePath: "/plugins/xformation-compliancemanager-ui-plugin/page",
  GET_ALL_COLLECTOR: `${catalogSrvUrl}/listCollector`,
  GET_FOLDER_TREE: `${catalogSrvUrl}/listFolderTree`,
  PERMS_LIST_ALL: `${securitySrvUrl}/security/permissions/listAll`,
  GET_ENTITIES_LIST: `${searchSrvUrl}/search/getIndexes`,
  POST_RULE: `${policySrvUrl}/rule/create`,
  POST_POLICY: `${policySrvUrl}/policy/create`,
  LIST_RULES: `${policySrvUrl}/rule/listAll`,
  SUGGEST_URL: `${policySrvUrl}/suggestKey`,
  ELS_QUERY: `${searchSrvUrl}/search/elsQuery`,
  GET_MAPPINGS: `${searchSrvUrl}/search/getIndexMapping`,
  GET_OPERTORS: `${policySrvUrl}/operatorsByType`,
  LIST_ALL_CLD_GRP: `${dynModelUrl}/cloudEntity/listAll`
};
