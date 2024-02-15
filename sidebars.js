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

  getting_started: [
    {
      type: "category",
      label: "Overview",
      collapsed: false,
      items: [
        "getting-started/what-is-iomete",
        "getting-started/platform-tour",
      ],
    },
    {
      type: "category",
      label: "Community Deployment",
      collapsed: false,
      items: [
        "community-deployment/overview",
        {
          type: "category",
          label: "AWS",
          collapsed: true,
          items: [
            "community-deployment/aws/install",
            "community-deployment/aws/permissions",
            "community-deployment/aws/aws-advanced-settings",
            "community-deployment/aws/troubleshooting",
            "community-deployment/aws/data-plane-cost",
            "community-deployment/aws/changelog",
            "community-deployment/aws/uninstall",
          ],
        },
        {
          type: "category",
          label: "Azure",
          collapsed: true,
          items: ["community-deployment/azure/install"],
        },
        {
          type: "category",
          label: "GCP",
          collapsed: true,
          items: ["community-deployment/gcp/install"],
        },
        {
          type: "category",
          label: "On-Premises",
          collapsed: true,
          items: ["community-deployment/on-prem/install"],
        },
        {
          type: "category",
          label: "Advanced Settings",
          collapsed: true,
          items: [
            "deployment/configure-custom-dns",
            "deployment/enable-tls",
            "deployment/ldap-configuration",
            "deployment/backend-databases",
            "deployment/life-cycle-management",
          ],
        },
      ],
    },
  ],

  guides: [
    {
      type: "category",
      label: "User Guide",
      collapsed: false,
      items: [
        "user-guide/virtual-lakehouses",
        // "user-guide/create-ssh-tunnel",
        "user-guide/sql-editor",
        "user-guide/data-catalog",
        "user-guide/users",
        "user-guide/groups",
        "user-guide/roles",
        "user-guide/create-a-personal-access-token",
        "user-guide/global-spark-settings",
        "user-guide/spark-catalogs",
        "user-guide/private-docker-registry",
      ],
    },
    {
      type: "category",
      label: "Data Sources",
      collapsed: false,
      items: [
        "reference/data-sources/jdbc-sources",
        "reference/data-sources/snowflake-connector",
        "reference/data-sources/csv-files",
        "reference/data-sources/json-files",
        "reference/data-sources/parquet-files",
        "reference/data-sources/orc-files",
      ],
    },
    {
      type: "category",
      label: "Data Security",
      collapsed: false,
      items: [
        "user-guide/data-security/overview",
        "user-guide/data-security/access-policy",
        "user-guide/data-security/data-masking",
        "user-guide/data-security/row-level-filter",
        "user-guide/data-security/tag-based-access-policy",
        "user-guide/data-security/tag-based-data-masking",
      ],
    },
    {
      type: "category",
      label: "Spark Jobs",
      collapsed: false,
      items: [
        "developer-guide/spark-job/getting-started",
        "developer-guide/spark-job/spark-application-config",
        "developer-guide/spark-job/iomete-sdk",
        "developer-guide/spark-job/airflow",
      ],
    },
    {
      type: "category",
      label: "Jupyter Notebook",
      collapsed: false,
      items: [
        "developer-guide/notebook/starting-with-notebook",
        "developer-guide/notebook/using-vscode",
      ],
    },
    {
      type: "category",
      label: "Client & Libraries",
      collapsed: false,
      items: [
        "developer-guide/driver/sql-alchemy-driver",
        "developer-guide/driver/jdbc-driver",
      ],
    },
    {
      type: "category",
      label: "Misc",
      collapsed: false,
      items: ["user-guide/misc/datagrip-lakehouse-connection"],
    },
  ],
  integrations: [
    {
      type: "category",
      label: "DBT",
      collapsed: false,
      items: [
        "integrations/dbt/getting-started-with-iomete-dbt",
        "integrations/dbt/dbt-materializations",
        "integrations/dbt/dbt-incremental-models",
        "integrations/dbt/dbt-incremental-models-by-examples",
      ],
    },
    {
      type: "category",
      label: "BI Integrations",
      collapsed: false,
      items: [
        "integrations/bi/metabase",
        "integrations/bi/apache-superset",
        "integrations/bi/power-bi",
        "integrations/bi/tableau",
        "integrations/bi/redash",
      ],
    },
  ],

  reference: [
    {
      type: "category",
      label: "SQL Quick Start",
      collapsed: false,
      items: [
        "reference/sql-quick-start/sql-ddl-examples",
        "reference/sql-quick-start/dml-operations",
        "reference/sql-quick-start/iceberg-advanced-features",
        "reference/sql-quick-start/tables-from-jdbc-csv-json",
        "reference/sql-quick-start/query-federation",
      ],
    },
    {
      type: "category",
      label: "Iceberg Tables",
      collapsed: false,
      items: [
        "reference/iceberg-tables/getting-started",
        "reference/iceberg-tables/ddl",
        "reference/iceberg-tables/queries",
        "reference/iceberg-tables/writes",
        "reference/iceberg-tables/iceberg-procedures",
        "reference/iceberg-tables/time-travel",
        "reference/iceberg-tables/maintenance",
      ],
    },
    {
      type: "category",
      label: "Spark SQL Reference",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "DDL",
          collapsed: true,
          items: [
            "reference/spark-sql/ddl/create-database",
            "reference/spark-sql/ddl/alter-database",
            "reference/spark-sql/ddl/drop-database",
            "reference/spark-sql/ddl/create-table",
            "reference/spark-sql/ddl/alter-table",
            // 'reference/spark-sql/ddl/drop-table',
            "reference/spark-sql/ddl/create-view",
            // "reference/spark-sql/ddl/sql-ddl-examples",
            // 'reference/spark-sql/ddl/drop-view'
          ],
        },
        {
          type: "category",
          label: "Writes",
          collapsed: true,
          items: [
            "reference/spark-sql/writes/truncate-table",
            "reference/spark-sql/writes/insert-into",
            "reference/spark-sql/writes/merge-into",
            "reference/spark-sql/writes/insert-overwrite",
          ],
        },
        {
          type: "category",
          label: "Queries",
          collapsed: true,
          items: [
            "reference/spark-sql/queries/select",
            "reference/spark-sql/queries/cte",
            "reference/spark-sql/queries/cluster-by-clause",
            "reference/spark-sql/queries/distribute-by-clause",
            "reference/spark-sql/queries/group-by-clause",
            "reference/spark-sql/queries/having-by-clause",
            "reference/spark-sql/queries/hints",
            "reference/spark-sql/queries/inline-table",
            "reference/spark-sql/queries/file",
            "reference/spark-sql/queries/join",
            "reference/spark-sql/queries/like-predicate",
            "reference/spark-sql/queries/limit-clause",
            "reference/spark-sql/queries/order-by-clause",
            "reference/spark-sql/queries/set-operators",
            "reference/spark-sql/queries/sort-by-clause",
            "reference/spark-sql/queries/sampling-queries",
            "reference/spark-sql/queries/table-valued-functions",
            "reference/spark-sql/queries/use-database",
            "reference/spark-sql/queries/where-clause",
            "reference/spark-sql/queries/window-functions",
            "reference/spark-sql/queries/case-clause",
            "reference/spark-sql/queries/pivot-clause",
            "reference/spark-sql/queries/lateral-view-clause",
            "reference/spark-sql/queries/transform",
          ],
        },
        "reference/spark-sql/cache",
        "reference/spark-sql/column-types",
        "reference/spark-sql/datetime-patterns",
        "reference/spark-sql/identifiers",
        "reference/spark-sql/operators",
        "reference/spark-sql/literals",
        "reference/spark-sql/null-semantics",
        "reference/spark-sql/functions",
      ],
    },
    {
      type: "category",
      label: "Pyspark",
      collapsed: false,
      items: ["reference/pyspark/pyspark-join"],
    },
    {
      type: "category",
      label: "Open Source Spark Jobs",
      collapsed: false,
      items: [
        "open-source-spark-jobs/data-compaction-job",
        "open-source-spark-jobs/query-scheduler-job",
        "open-source-spark-jobs/mysql-database-replication-job",
        "open-source-spark-jobs/kafka-streaming",
        "open-source-spark-jobs/file-streaming",
        "open-source-spark-jobs/ingesting-jobs",
      ],
    },
  ],

  tutorials: [
    "tutorials/read-files-from-aws-s3",
    "tutorials/sync-data-from-jdbc-sources",
    "tutorials/export-as-a-csv-file",
    "tutorials/external-s3-buckets-access",
  ],
};

export default sidebars;
