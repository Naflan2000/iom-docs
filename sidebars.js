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
      type: 'category',
      label: 'Documentation',
      // collapsed: false,
      items: ['docs', 'docs/platform']
    },
    {
      type: 'category',
      label: 'Iceberg Tables',
      // collapsed: false,
      items: [
        'iceberg/getting-started',
        'iceberg/ddl',
        'iceberg/queries',
        'iceberg/writes',
        'iceberg/procedure',
        'iceberg/maintenance',
      ]
    },
    {
      type: 'category',
      label: 'Data Sources',
      // collapsed: false,
      items: [
        'data-source/jdbc',
        'data-source/csv',
        'data-source/json',
        'data-source/parquet',
        'data-source/orc',
      ]
    },
    {
      type: 'category',
      label: 'Spark SQL reference',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'DDL',
          // collapsed: false,
          items: [
            'sql/ddl/create-db',
            'sql/ddl/alter-db',
            'sql/ddl/drop-db',
            'sql/ddl/create-table',
            'sql/ddl/alter-table',
            'sql/ddl/drop-table',
            'sql/ddl/create-view',
            'sql/ddl/drop-view'
          ]
        },
        {
          type: 'category',
          label: 'Writes',
          // collapsed: false,
          items: [
            'sql/writes/truncate-table',
            'sql/writes/insert-into',
            'sql/writes/merge-into',
            'sql/writes/insert-overwrite',
          ]
        },
        {
          type: 'category',
          label: 'Queries',
          collapsed: false,
          items: [
            'sql/queries/select',
            'sql/queries/cte',
            'sql/queries/cluster-by-clause',
            'sql/queries/distribute-by-clause',
            'sql/queries/group-by-clause',
            'sql/queries/having-by-clause',
            'sql/queries/hints',
            'sql/queries/inline-table',
            'sql/queries/file',
            'sql/queries/join',
            'sql/queries/like-predicate',
            'sql/queries/limit-clause',
            'sql/queries/order-by-clause',
            'sql/queries/set-operators',
            'sql/queries/sort-by-clause',
            'sql/queries/sampling-queries',
            'sql/queries/table-valued-functions',
            'sql/queries/use-database',
            'sql/queries/where-clause',
          ]
        },
      ]
    },
    // {
    //   type: 'category',
    //   label: 'Tests',
    //   collapsed: false,
    //   items: ['test/test1']
    // }
  ],

  guide: [{
    type: 'category',
    label: 'How to',
    collapsed: false,
    items: ['how-to', 'how-to/data-from-s3', 'how-to/data-from-s3-to-iomete', 'how-to/data-from-jdbc', 'how-to/run-spark-job']
  }]
};

module.exports = sidebars;
