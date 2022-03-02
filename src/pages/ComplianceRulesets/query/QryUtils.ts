import * as _ from 'lodash';

//const INDX = "@INDX#";

export default class QryUtils {
  static getJsonKeys(ent: any) {
    const obj = ent;
    if (!obj) {
      return;
    }
    const keys: any = [];
    Object.keys(obj).forEach((key) => {
      keys.push(key);
    });
    return keys;
  }

  static mergeArrOfObjects(left: any, right: any) {
    console.log('Left: ', JSON.stringify(left), '\nRight: ', JSON.stringify(right));
    if (left && Array.isArray(left) && left.length > 0) {
      if (right && Array.isArray(right) && right.length > 0) {
        left.map((itm) => ({
          ...right.find((item) => item.Header === itm.Header && item),
          ...itm,
        }));
      }
      console.log('Output: ', JSON.stringify(left));
      return left;
    } else {
      console.log('Output: ', JSON.stringify(right));
      return right;
    }
  }

  static arrayHasObject(arr: any, obj: any) {
    const res = { res: false };
    arr.map((item: any) => {
      if (item.Header === obj.Header) {
        res.res = true;
      }
      return item;
    });
    console.log('Res: ', res.res);
    return res.res;
  }

  static getColObj(key: any, code: any) {
    const upper = key.replace(/^\w/, (c: any) => c.toUpperCase());
    return {
      Header: upper,
      accessor: code,
      sortable: true,
      filterable: true,
    };
  }

  static visitEntityForKeys(entKeys: any, entity: any, visitNested = true, forRctTbl = false, pKey = '') {
    const cols: any = [];
    if (!entity) {
      return cols;
    }
    Object.keys(entity).forEach((key) => {
      const pk = pKey + key;
      console.log('Key: ' + pk);
      if (visitNested && Array.isArray(entity[key])) {
        QryUtils.extractEntityArray(cols, entity[key], forRctTbl, pk, visitNested);
      } else if (visitNested && typeof entity[key] === 'object') {
        QryUtils.visitEntityForKeys(cols, entity[key], visitNested, forRctTbl, pk + '.');
      } else {
        if (forRctTbl) {
          const obj = QryUtils.getColObj(key, pk);
          console.log('arr: ', JSON.stringify(cols));
          console.log('obj: ', obj);
          if (!QryUtils.arrayHasObject(cols, obj)) {
            console.log('pushed');
            cols.push(obj);
          }
        } else {
          if (cols.indexOf(pk) === -1) {
            cols.push(pk);
          }
        }
      }
      return cols;
    });
    //QryUtils.mergeArrOfObjects(entKeys, cols);
    if (cols && cols.length > 0) {
      if (forRctTbl && pKey && pKey !== '') {
        var hdr = pKey.replace(/^\w/, (c: any) => c.toUpperCase());
        hdr = hdr.substring(0, hdr.length - 1);
        const obj = {
          Header: hdr,
          columns: cols,
        };
        console.log('arr: ', entKeys);
        console.log('obj: ', obj);
        if (!QryUtils.arrayHasObject(entKeys, obj)) {
          console.log('pushed');
          entKeys.push(obj);
        }
      } else {
        cols.forEach((item: any) => {
          if (typeof item === 'object') {
            if (!QryUtils.arrayHasObject(entKeys, item)) {
              entKeys.push(item);
            }
          } else {
            if (entKeys.indexOf(item) === -1) {
              entKeys.push(item);
            }
          }
        });
      }
    }
    return entKeys;
  }

  static extractEntityArray(entKeys: any, arr: any, forRctTbl: any, key: any, visitNested: boolean = true) {
    console.log('arrkey: ' + key);
    arr.forEach((item: any) => {
      if (visitNested && Array.isArray(item)) {
        entKeys = QryUtils.extractEntityArray(entKeys, item, forRctTbl, key);
      } else if (typeof item === 'object') {
        entKeys = QryUtils.visitEntityForKeys(entKeys, item, visitNested, forRctTbl, key + '.');
      } else {
        if (forRctTbl) {
          const obj = QryUtils.getColObj(key, key);
          console.log('arr: ', JSON.stringify(entKeys));
          console.log('obj: ', obj);
          if (!QryUtils.arrayHasObject(entKeys, obj)) {
            console.log('pushed');
            entKeys.push(obj);
          }
        } else {
          if (entKeys.indexOf(key) === -1) {
            entKeys.push(key);
          }
        }
      }
      return entKeys;
    });
    return entKeys;
  }

  static getResultTable(cnt: any, data: any) {
    if (cnt <= 0) {
      return '';
    }
    var entKeys: any = [];
    const sources: any = [];
    if (data && data.hits) {
      const hits = data.hits.hits ? data.hits.hits : data.hits;
      hits.forEach((item: any, key: any) => {
        var jobj;
        if (typeof item === 'string') {
          jobj = JSON.parse(item);
          key = jobj.id;
          sources.push(jobj);
        } else {
          key = item._id;
          jobj = item._source;
          sources.push(jobj);
        }
        entKeys = QryUtils.visitEntityForKeys(entKeys, jobj, false);
      });
      console.log('Keys: ', JSON.stringify(entKeys));
    }
    return QryUtils.createTableByArray(sources, entKeys);
  }

  static createTableByArray(sources: any, entKeys: any, caption = true) {
    var html = "<table id='trnsResTbl'>";
    var header = true;
    var keys: any = [];
    sources.forEach((item: any) => {
      console.log('Item: ', item);
      if (caption && typeof item === 'object') {
        if (entKeys && entKeys.length === 1) {
          if (header) {
            // add table caption
            html += QryUtils.addCaption(entKeys);
          }
          // Collect json keys to visit
          if (Object.keys(item).indexOf(entKeys[0]) !== -1) {
            item = _.get(item, entKeys[0]);
          }
        }
      }
      console.log('Hdr: ', header);
      keys = QryUtils.visitEntityForKeys(keys, item, false);
      if (header) {
        html += QryUtils.createTableHeader(keys);
        header = false;
      }
      html += QryUtils.createTableByJson(keys, item, header);
    });
    html += '</table>';
    return html;
  }

  static addCaption(key: any) {
    if (key && key.length > 1) {
      console.warn('Invalid caption with multiple keys');
    }
    console.log('key: ', key);
    return '<caption>' + key + '</caption>';
  }

  static createTableByJson(keys: any, item: any, header: any) {
    var html = '';
    if (header && typeof item === 'object') {
      if (item && keys && keys.length === 1) {
        // add table caption for inner tables
        // html += QryUtils.addCaption(keys);
        // Collect json keys to visit
        if (Object.keys(item).indexOf(keys[0]) !== -1) {
          item = _.get(item, keys[0]);
        }
      }
      keys = QryUtils.visitEntityForKeys([], item, false);
    }
    //console.log("keys: ", keys);
    //console.log("item: ", item);
    if (header) {
      // create header
      html += QryUtils.createTableHeader(keys);
    }
    html += QryUtils.createTableRow(keys, item);
    return html;
  }

  static createTableRow(entKeys: any, item: any) {
    var html = '';
    if (item) {
      html += '<tr>';
      entKeys.forEach((key: any) => {
        //console.log("key: ", key);
        const val = _.get(item, key, '');
        //console.log("val: ", val);
        if (Array.isArray(val)) {
          html += '<td>' + QryUtils.createListByArr(val) + '</td>';
        } else if (typeof val === 'object') {
          var tbl = '<table>';
          const keys = [];
          keys.push(key);
          tbl += QryUtils.createTableByJson(keys, val, true);
          tbl += '</table>';
          html += '<td>' + tbl + '</td>';
        } else {
          html += '<td>' + val + '</td>';
        }
      });
      html += '</tr>';
    }
    return html;
  }

  static createListByArr(arr: any) {
    var html = '';
    if (arr && arr.length > 0) {
      html += '<ul>';
      arr.forEach((val: any) => {
        //console.log("Val: ", val);
        if (Array.isArray(val)) {
          html += '<li>' + QryUtils.createListByArr(val) + '</li>';
        } else if (typeof val === 'object') {
          var tbl = '<table>';
          var hdr = true;
          tbl += QryUtils.createTableByJson([], val, hdr);
          tbl += '</table>';
          html += '<li>' + tbl + '</li>';
        } else {
          html += '<li>' + val + '</li>';
        }
        return html;
      });
      html += '<ul>';
    }
    return html;
  }

  static createTableHeader(arr: any) {
    var html = '<thead>';
    arr.forEach((key: any) => {
      html += '<th>' + key + '</th>';
    });
    html += '</thead>';
    return html;
  }

  static getQuery(val: any) {
    var res = val.trim();
    if (val && val.length > 0) {
      var arr = val.split(' ');
      if (arr) {
        var len = arr.length;
        if (len > 1) {
          var cur = arr[len - 1];
          var prev = arr[len - 2].toLowerCase();
          if (prev && prev.indexOf(',') === prev.length - 1) {
            for (var i = len - 2; i >= 0; i--) {
              var pVal = arr[i];
              if (pVal && pVal.indexOf('[') === 0) {
                res = cur;
                break;
              } else if (pVal.indexOf(',') === pVal.length - 1) {
                continue;
              } else {
                break;
              }
            }
          } else {
            switch (prev) {
              case 'has':
              case 'and':
              case 'or':
              case '[':
                res = cur;
                break;
              default:
                res = '';
            }
          }
        }
      }
    }
    if (res && res !== '' && (res.indexOf('[') === 0 || res.indexOf('(') === 0)) {
      res = res.substring(1);
    }
    return res;
  }

  static getSuggestionList(data: any) {
    var html = '';
    if (Array.isArray(data)) {
      html += "<ul class='suggesstions maxHeight'>";
      for (var i = 0; i < data.length; i++) {
        var key = data[i];
        html += "<li id='" + key + "'>" + key + '</li>';
      }
      html += '</ul>';
    }
    return html;
  }
}
