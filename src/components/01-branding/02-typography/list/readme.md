Lists can be ordered, unordered, not have list item bullets, or unstyled and have icons and/or be links.

The no-bullet and unstyled variants differ because `sds-list--no-bullets` does not have any list item bullets but still has default styling (padding, margins, etc.) while `sds-list--unstyled` removes all default styling.

See Cards -- List for example of adding adding a list to a card.

### SAM Styles Specific Variables
- items (all fields are optional but should have at least one)
  - icon: @icon
  - list: @link
  - text
  - nested: another list with items and modifier `nested`
- title (*optional*): @title
- ordered (*optional*): Boolean if list should be an ordered list
- modifiers (*optional*): Modifier array *options: unstyled, icon, no-bullets*
