// composables/useIcons.js

export function useIcons() {
  const { getItems } = useDirectusItems();
  const { getSvgContent } = useGenerateImageUrl();
  const getDirectusIcon = async (name) => {
    let output = await getItems({
      collection: "snippets_single_icon",
      params: {
        fields: ["icon_file.id"],
        filter: {
          icon_name: {
            _eq: name,
          },
        },
      },
    });

    return await getSvgContent(output[0].icon_file.id);
  };

  return {
    getDirectusIcon,
  };
}
