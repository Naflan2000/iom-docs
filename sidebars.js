/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    {
      type: "category",
      label: "Documentation",
      collapsed: false,
      items: ["intro", "intro/platform"],
    },
    {
      type: "category",
      label: "User Guide",
      collapsed: false,
      items: [
        // "user-guide/sso-login",
        // "user-guide/virtual-lakehouses",
        "user-guide/virtual-lakehouses",
        // "user-guide/lakehouse-statuses",
        // 'user-guide/user-management',
        // 'user-guide/access-policy-management',
        // 'user-guide/serverless-spark-applications',
        // 'user-guide/storage-integrations',
        "user-guide/private-docker-registry",
        "user-guide/create-a-personal-access-token",
        "user-guide/create-ssh-tunnel",
        "user-guide/sql-editor",
        "user-guide/iomete-sdk",
      ],
    },
    {
      type: "category",
      label: "Iceberg Tables",
      collapsed: true,
      items: [
        "iceberg-tables/getting-started",
        "iceberg-tables/ddl",
        "iceberg-tables/queries",
        "iceberg-tables/writes",
        "iceberg-tables/iceberg-procedures",
        "iceberg-tables/maintenance",
      ],
    },
    {
      type: "category",
      label: "Data Sources",
      collapsed: true,
      items: [
        "data-sources/jdbc-sources",
        "data-sources/csv-files",
        "data-sources/json-files",
        "data-sources/parquet-files",
        "data-sources/orc-files",
      ],
    },
    {
      type: "category",
      label: "Spark SQL reference",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "DDL",
          collapsed: true,
          items: [
            "spark-sql/ddl/create-database",
            "spark-sql/ddl/alter-database",
            "spark-sql/ddl/drop-database",
            "spark-sql/ddl/create-table",
            "spark-sql/ddl/alter-table",
            // 'spark-sql/ddl/drop-table',
            "spark-sql/ddl/create-view",
            // 'spark-sql/ddl/drop-view'
          ],
        },
        {
          type: "category",
          label: "Writes",
          collapsed: true,
          items: [
            "spark-sql/writes/truncate-table",
            "spark-sql/writes/insert-into",
            "spark-sql/writes/merge-into",
            "spark-sql/writes/insert-overwrite",
          ],
        },
        {
          type: "category",
          label: "Queries",
          collapsed: true,
          items: [
            "spark-sql/queries/select",
            "spark-sql/queries/cte",
            "spark-sql/queries/cluster-by-clause",
            "spark-sql/queries/distribute-by-clause",
            "spark-sql/queries/group-by-clause",
            "spark-sql/queries/having-by-clause",
            "spark-sql/queries/hints",
            "spark-sql/queries/inline-table",
            "spark-sql/queries/file",
            "spark-sql/queries/join",
            "spark-sql/queries/like-predicate",
            "spark-sql/queries/limit-clause",
            "spark-sql/queries/order-by-clause",
            "spark-sql/queries/set-operators",
            "spark-sql/queries/sort-by-clause",
            "spark-sql/queries/sampling-queries",
            "spark-sql/queries/table-valued-functions",
            "spark-sql/queries/use-database",
            "spark-sql/queries/where-clause",
            "spark-sql/queries/window-functions",
            "spark-sql/queries/case-clause",
            "spark-sql/queries/pivot-clause",
            "spark-sql/queries/literal-view-clause",
            "spark-sql/queries/transform",
          ],
        },
        {
          type: "category",
          label: "Auxiliary Statements",
          collapsed: true,
          items: ["spark-sql/auxiliary-statements/cache"],
        },
        "spark-sql/column-types",
        "spark-sql/datetime-patterns",
        "spark-sql/identifiers",
        "spark-sql/operators",
        "spark-sql/literals",
        "spark-sql/null-semantics",
        "spark-sql/functions",
      ],
    },
    {
      type: "category",
      label: "Spark Jobs",
      collapsed: true,
      items: [
        "iomete-spark-job/data-compaction-job",
        "iomete-spark-job/query-scheduler-job",
        "iomete-spark-job/jdbc-sync-job",
        "iomete-spark-job/kafka-streaming",
        "iomete-spark-job/file-streaming",
      ],
    },
    {
      type: "category",
      label: "Jupyter Notebook",
      collapsed: true,
      items: ["notebook/starting-with-notebook", "notebook/using-vscode"],
    },
    {
      type: "category",
      label: "Libraries",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Drivers",
          collapsed: true,
          items: ["libraries/drivers/sql-alchemy-driver", "libraries/drivers/jdbc-driver"],
        },
      ],
    },
    {
      type: "category",
      label: "Administration",
      collapsed: true,
      items: ["administration-guide/iomete-ip-addresses", "administration-guide/database-connection-options"],
    },
    {
      type: "category",
      label: "Misc",
      collapsed: true,
      items: ["misc/datagrip-lakehouse-connection"],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: true,
      items: ["integrations/airbyte"],
    },
  ],

  guides: [
    {
      type: "category",
      label: "How To Guides",
      collapsed: false,
      items: [
        "guides",
        // "guides/aws-cost-usage-reports-data-processing",
        {
          type: "category",
          label: "Installation",
          collapsed: false,
          items: ["guides/installation/how-to-install", "guides/installation/installation-faq"],
        },
        {
          type: "category",
          label: "Sync",
          collapsed: false,
          items: ["guides/sync-data-from-aws-s3", "guides/sync-data-from-jdbc-sources", "guides/external-s3-buckets-access"],
        },
        {
          type: "category",
          label: "Spark Jobs",
          collapsed: false,
          items: ["guides/spark-job/getting-started", "guides/ingestingdata", "guides/spark-application-config"],
        },
        {
          type: "category",
          label: "Transformation",
          collapsed: false,
          items: [
            "guides/dbt/getting-started-with-iomete-dbt",
            "guides/dbt/dbt-materializations",
            "guides/dbt/dbt-incremental-models",
            "guides/dbt/dbt-incremental-models-by-examples",
          ],
        },
        {
          type: "category",
          label: "BI Integrations",
          collapsed: false,
          items: [
            // 'guides/connection-options',
            "guides/how-to-connect-iomete-and-metabase-bi",
            "guides/how-to-connect-iomete-and-apache-superset",
            "guides/power-bi",
            "guides/iomete-tableau-integration",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
