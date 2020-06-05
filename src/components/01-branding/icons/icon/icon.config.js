const icons = [
  "pentagon",
  "triangle",
  "leaf",
  "file",
  "star",
  "flag",
  "reset",
  "exclamation",
  "exclamation-circle",
  "question",
  "angle-left",
  "angle-right",
  "federal-building",
  "ellipsis",
  "arrow-up",
  "arrow-down",
  "arrow",
  "thumb-up",
  "thumb-down",
  "download",
  "upload",
  "log-out",
  "log-in",
  "users",
  "user",
  "user-circle",
  "search",
  "search-circle",
  "question-circle",
  "video-square",
  "video-circle",
  "video-play",
  "alert-warning",
  "check-circle",
  "check",
  "information-circle",
  "alert-info",
  "alert-error",
  "bars",
  "bell",
  "book",
  "bookmark",
  "calendar",
  "calendar-add",
  "calendar-check",
  "envelope",
  "file-chart-line",
  "filter",
  "home",
  "invoice",
  "receipt",
  "link",
  "unlink",
  "new-note",
  "print",
  "ruler-pencil",
  "share",
  "trash",
  "workspace",
  "ship",
  "folder",
  "folder-alt-1",
  "folder-alt-2",
  "open-doors",
  "building",
  "building-alt",
  "pen-paper",
  "tag",
  "photo",
  "photo-alt",
  "new-version",
  "article",
  "note",
  "request",
  "messages",
  "comment",
  "mobile",
  "tablet",
  "document",
  "document-add",
  "document-search",
  "document-pdf",
  "add",
  "exit",
  "angle-circle",
  "add-req",
  "attachment"
];

// Sort icons alphabetically.
icons.sort();

/**
 * Helper to convert the list of icon names to a list of icon variants.
 */
function getIconVariants() {
  let variants = [];
  let len = icons.length;

  for (let i = 0; i < len; i++) {
    let icon = icons[i];
    let variant = {
      name: icon,
      context: {
        icon: icon
      }
    };
    variants.push(variant);
  }
  return variants;
}

module.exports = {
  label: "Icon",
  status: "wip",
  collated: true,
  context: {
    classes: "fa-2x",
    title: "Screen reader description",
  },
  collator: function (markup, item) {
    return '<!-- Start: @' + item.handle + ' -->\n<div class="display-inline-block padding-2 text-center"><p>' + item.name + '</p>' + markup + '</div>\n<!-- End: @' + item.handle + ' -->\n';
  },
  default: icons[0],
  variants: getIconVariants()
};
