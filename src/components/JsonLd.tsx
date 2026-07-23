type JsonLdData = Record<string, unknown>;

// Safe: data is always internal schema constants, never user input.
// JSON.stringify on typed objects cannot produce XSS in a <script type="application/ld+json"> block.
export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
