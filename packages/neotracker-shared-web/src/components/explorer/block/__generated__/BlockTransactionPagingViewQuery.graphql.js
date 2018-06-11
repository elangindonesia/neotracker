/**
 * @flow
 * @relayHash 0003c36e9d1846316fa372f0b70d770b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TransactionPagingView_transactions$ref = any;
export type BlockTransactionPagingViewQueryVariables = {|
  index: number,
  first: number,
  after?: ?string,
|};
export type BlockTransactionPagingViewQueryResponse = {|
  +block: ?{|
    +transactions: {|
      +edges: $ReadOnlyArray<{|
        +node: {|
          +$fragmentRefs: TransactionPagingView_transactions$ref
        |}
      |}>,
      +pageInfo: {|
        +hasPreviousPage: boolean,
        +hasNextPage: boolean,
      |},
    |}
  |}
|};
*/


/*
query BlockTransactionPagingViewQuery(
  $index: Int!
  $first: Int!
  $after: String
) {
  block(index: $index) {
    transactions(first: $first, after: $after, orderBy: [{name: "transaction.index", direction: "asc"}]) {
      edges {
        node {
          ...TransactionPagingView_transactions
          id
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
    id
  }
}

fragment TransactionPagingView_transactions on Transaction {
  ...TransactionTable_transactions
}

fragment TransactionTable_transactions on Transaction {
  id
  ...TransactionSummary_transaction
}

fragment TransactionSummary_transaction on Transaction {
  hash
  ...TransactionSummaryHeader_transaction
}

fragment TransactionSummaryHeader_transaction on Transaction {
  ...TransactionHeaderBackground_transaction
  ...TransactionTypeAndLink_transaction
  type
  block_time
}

fragment TransactionHeaderBackground_transaction on Transaction {
  type
}

fragment TransactionTypeAndLink_transaction on Transaction {
  type
  hash
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "index",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "index",
    "variableName": "index",
    "type": "Int"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first",
    "type": "Int"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      {
        "direction": "asc",
        "name": "transaction.index"
      }
    ],
    "type": "[OrderByInput!]"
  }
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasPreviousPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BlockTransactionPagingViewQuery",
  "id": "4",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BlockTransactionPagingViewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "block",
        "storageKey": null,
        "args": v1,
        "concreteType": "Block",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "transactions",
            "storageKey": null,
            "args": v2,
            "concreteType": "BlockToTransactionsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "BlockToTransactionsEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Transaction",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "FragmentSpread",
                        "name": "TransactionPagingView_transactions",
                        "args": null
                      }
                    ]
                  }
                ]
              },
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BlockTransactionPagingViewQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "block",
        "storageKey": null,
        "args": v1,
        "concreteType": "Block",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "transactions",
            "storageKey": null,
            "args": v2,
            "concreteType": "BlockToTransactionsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "BlockToTransactionsEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Transaction",
                    "plural": false,
                    "selections": [
                      v4,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hash",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "type",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "block_time",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              v3
            ]
          },
          v4
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f99bc674b14c73bce54abcd354dfddec';
module.exports = node;
