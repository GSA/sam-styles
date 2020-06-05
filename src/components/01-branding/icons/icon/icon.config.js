const _ = require("lodash");

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
  const variants = [];

  // example colors
  let colorsLoop = [null, 'primary', 'secondary', 'accent-cool'];

  // loop through example colors for demo
  const colorRepeat = _.floor(icons.length, colorsLoop.length);
  const colors = _.flatten(Array(colorRepeat).fill(colorsLoop));

  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];

    // set icon color if present in demo color loop
    const classes =  colors[i] ? 'fa-2x text-' + colors[i] : 'fa-2x';

    const variant = {
      name: icon,
      context: {
        icon: icon,
        classes: classes
      }
    };
    variants.push(variant);
  }
  return variants;
}
function getCollator(markup, item) {
    const html =  '<!-- Start: @' + item.handle + ' -->' +
    '<div class="display-inline-block padding-2 text-center">' +
      '<p>' + item.name + '</p>' + markup +
    '</div>' +
    '<!-- End: @' + item.handle + ' -->';
    return html;
}

module.exports = {
  label: "Icon",
  status: "wip",
  collated: true,
  context: {
    title: "Screen reader description"
  },
  collator: function (markup, item) {
    return getCollator(markup, item);
  },
  default: icons[0],
  variants: getIconVariants()
};