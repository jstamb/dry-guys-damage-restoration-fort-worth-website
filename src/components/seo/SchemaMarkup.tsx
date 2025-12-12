import React from 'react';

type SchemaMarkupProps = {
  schema: object;
};

/**
 * A generic component to render any Schema.org JSON-LD object.
 */
const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default SchemaMarkup;
