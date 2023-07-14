<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="false"
        permanent
        style="height: 100%"
      >
        <v-list nav>
          <v-list-item
            v-for="item in compo_list"
            :key="item.id"
            :prepend-icon="item.prepend_icon"
            :title="item.title"
            :value="item.value"
            @click="handelClick"
          >
        </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: false,
      compo_list: [
        {
          title: "accessibility_list_item_group",
          prepend_icon: "mdi-Atom",
          value: "accessibility_list_item_group",
        },
        {
          title: "accessibility_menu",
          prepend_icon: "mdi-Atom",
          value: "accessibility_menu",
        },
        {
          title: "accessibility_select_list_item",
          prepend_icon: "mdi-Atom",
          value: "accessibility_select_list_item",
        },
        {
          title: "application_theme",
          prepend_icon: "mdi-Atom",
          value: "application_theme",
        },
        {
          title: "application_layout_app_bar_first",
          prepend_icon: "mdi-Atom",
          value: "application_layout_app_bar_first",
        },
        {
          title: "application_layout_discord",
          prepend_icon: "mdi-Atom",
          value: "application_layout_discord",
        },
        {
          title: "application_layout_dynamic",
          prepend_icon: "mdi-Atom",
          value: "application_layout_dynamic",
        },
        {
          title: "application_layout_layout_information_composable",
          prepend_icon: "mdi-Atom",
          value: "application_layout_layout_information_composable",
        },
        {
          title: "application_layout_layout_information_ref",
          prepend_icon: "mdi-Atom",
          value: "application_layout_layout_information_ref",
        },
        {
          title: "application_layout_location",
          prepend_icon: "mdi-Atom",
          value: "application_layout_location",
        },
        {
          title: "application_layout_nav_drawer_first",
          prepend_icon: "mdi-Atom",
          value: "application_layout_nav_drawer_first",
        },
        {
          title: "blueprints_md1",
          prepend_icon: "mdi-Atom",
          value: "blueprints_md1",
        },
        {
          title: "blueprints_md2",
          prepend_icon: "mdi-Atom",
          value: "blueprints_md2",
        },
        {
          title: "blueprints_md3",
          prepend_icon: "mdi-Atom",
          value: "blueprints_md3",
        },
        {
          title: "border_radius_misc_pill_and_circle",
          prepend_icon: "mdi-Atom",
          value: "border_radius_misc_pill_and_circle",
        },
        {
          title: "border_radius_misc_removing_border_radius",
          prepend_icon: "mdi-Atom",
          value: "border_radius_misc_removing_border_radius",
        },
        {
          title: "border_radius_misc_rounding_by_corner",
          prepend_icon: "mdi-Atom",
          value: "border_radius_misc_rounding_by_corner",
        },
        {
          title: "border_radius_misc_rounding_by_side",
          prepend_icon: "mdi-Atom",
          value: "border_radius_misc_rounding_by_side",
        },
        {
          title: "border_radius_usage",
          prepend_icon: "mdi-Atom",
          value: "border_radius_usage",
        },
        {
          title: "color_classes",
          prepend_icon: "mdi-Atom",
          value: "color_classes",
        },
        {
          title: "color_text_classes",
          prepend_icon: "mdi-Atom",
          value: "color_text_classes",
        },
        {
          title: "display_display_block",
          prepend_icon: "mdi-Atom",
          value: "display_display_block",
        },
        {
          title: "display_display_inline",
          prepend_icon: "mdi-Atom",
          value: "display_display_inline",
        },
        {
          title: "display_hidden_elements",
          prepend_icon: "mdi-Atom",
          value: "display_hidden_elements",
        },
        {
          title: "display_print",
          prepend_icon: "mdi-Atom",
          value: "display_print",
        },
        {
          title: "display_visibility",
          prepend_icon: "mdi-Atom",
          value: "display_visibility",
        },
        {
          title: "elevation_prop_dynamic",
          prepend_icon: "mdi-Atom",
          value: "elevation_prop_dynamic",
        },
        {
          title: "elevation_usage",
          prepend_icon: "mdi-Atom",
          value: "elevation_usage",
        },
        {
          title: "flex_flex_align_content_around",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_align_content_around",
        },
        {
          title: "flex_flex_align_content_between",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_align_content_between",
        },
        {
          title: "flex_flex_align_content_center",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_align_content_center",
        },
        {
          title: "flex_flex_align_content_end",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_align_content_end",
        },
        {
          title: "flex_flex_align_content_start",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_align_content_start",
        },
        {
          title: "flex_flex_align_self",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_align_self",
        },
        {
          title: "flex_flex_align",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_align",
        },
        {
          title: "flex_flex_column",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_column",
        },
        {
          title: "flex_flex_direction",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_direction",
        },
        {
          title: "flex_flex_flex",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_flex",
        },
        {
          title: "flex_flex_justify",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_justify",
        },
        {
          title: "flex_flex_nowrap",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_nowrap",
        },
        {
          title: "flex_flex_order",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_order",
        },
        {
          title: "flex_flex_wrap_reverse",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_wrap_reverse",
        },
        {
          title: "flex_flex_wrap",
          prepend_icon: "mdi-Atom",
          value: "flex_flex_wrap",
        },
        {
          title: "flex_flexbox_inline",
          prepend_icon: "mdi-Atom",
          value: "flex_flexbox_inline",
        },
        {
          title: "flex_flexbox",
          prepend_icon: "mdi-Atom",
          value: "flex_flexbox",
        },
        {
          title: "flex_grow_shrink",
          prepend_icon: "mdi-Atom",
          value: "flex_grow_shrink",
        },
        {
          title: "flex_margins_align_items",
          prepend_icon: "mdi-Atom",
          value: "flex_margins_align_items",
        },
        {
          title: "flex_margins",
          prepend_icon: "mdi-Atom",
          value: "flex_margins",
        },
        {
          title: "float_classes",
          prepend_icon: "mdi-Atom",
          value: "float_classes",
        },
        {
          title: "float_responsive",
          prepend_icon: "mdi-Atom",
          value: "float_responsive",
        },
        {
          title: "grid_misc_column_wrapping",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_column_wrapping",
        },
        {
          title: "grid_misc_equal_width_columns",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_equal_width_columns",
        },
        {
          title: "grid_misc_grow_and_shrink",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_grow_and_shrink",
        },
        {
          title: "grid_misc_margin_helpers",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_margin_helpers",
        },
        {
          title: "grid_misc_nested_grid",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_nested_grid",
        },
        {
          title: "grid_misc_one_column_width",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_one_column_width",
        },
        {
          title: "grid_misc_row_and_column_breakpoints",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_row_and_column_breakpoints",
        },
        {
          title: "grid_misc_spacer",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_spacer",
        },
        {
          title: "grid_misc_unique_layouts",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_unique_layouts",
        },
        {
          title: "grid_misc_variable_content",
          prepend_icon: "mdi-Atom",
          value: "grid_misc_variable_content",
        },
        {
          title: "grid_prop_align",
          prepend_icon: "mdi-Atom",
          value: "grid_prop_align",
        },
        {
          title: "grid_prop_breakpoint_sizing",
          prepend_icon: "mdi-Atom",
          value: "grid_prop_breakpoint_sizing",
        },
        {
          title: "grid_prop_justify",
          prepend_icon: "mdi-Atom",
          value: "grid_prop_justify",
        },
        {
          title: "grid_prop_no_gutters",
          prepend_icon: "mdi-Atom",
          value: "grid_prop_no_gutters",
        },
        {
          title: "grid_prop_offset_breakpoint",
          prepend_icon: "mdi-Atom",
          value: "grid_prop_offset_breakpoint",
        },
        {
          title: "grid_prop_offset",
          prepend_icon: "mdi-Atom",
          value: "grid_prop_offset",
        },
        {
          title: "grid_prop_order_first_and_last",
          prepend_icon: "mdi-Atom",
          value: "grid_prop_order_first_and_last",
        },
        {
          title: "grid_prop_order",
          prepend_icon: "mdi-Atom",
          value: "grid_prop_order",
        },
        { title: "grid_usage", prepend_icon: "mdi-Atom", value: "grid_usage" },
        {
          title: "overflow_overflow_x",
          prepend_icon: "mdi-Atom",
          value: "overflow_overflow_x",
        },
        {
          title: "overflow_overflow",
          prepend_icon: "mdi-Atom",
          value: "overflow_overflow",
        },
        {
          title: "scroll_usage",
          prepend_icon: "mdi-Atom",
          value: "scroll_usage",
        },
        {
          title: "sizing_height",
          prepend_icon: "mdi-Atom",
          value: "sizing_height",
        },
        {
          title: "sizing_width",
          prepend_icon: "mdi-Atom",
          value: "sizing_width",
        },
        {
          title: "spacing_breakpoints",
          prepend_icon: "mdi-Atom",
          value: "spacing_breakpoints",
        },
        {
          title: "spacing_horizontal",
          prepend_icon: "mdi-Atom",
          value: "spacing_horizontal",
        },
        {
          title: "spacing_negative_margin",
          prepend_icon: "mdi-Atom",
          value: "spacing_negative_margin",
        },
        {
          title: "spacing_usage",
          prepend_icon: "mdi-Atom",
          value: "spacing_usage",
        },
        {
          title: "text_and_typography_font_emphasis",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_font_emphasis",
        },
        {
          title: "text_and_typography_text_alignment_responsive",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_alignment_responsive",
        },
        {
          title: "text_and_typography_text_alignment",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_alignment",
        },
        {
          title: "text_and_typography_text_break",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_break",
        },
        {
          title: "text_and_typography_text_decoration",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_decoration",
        },
        {
          title: "text_and_typography_text_no_wrap",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_no_wrap",
        },
        {
          title: "text_and_typography_text_opacity",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_opacity",
        },
        {
          title: "text_and_typography_text_rtl",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_rtl",
        },
        {
          title: "text_and_typography_text_transform",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_transform",
        },
        {
          title: "text_and_typography_text_truncate",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_text_truncate",
        },
        {
          title: "text_and_typography_typography_breakpoints",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_typography_breakpoints",
        },
        {
          title: "text_and_typography_typography",
          prepend_icon: "mdi-Atom",
          value: "text_and_typography_typography",
        },
        {
          title: "transitions_misc_expand_x",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_expand_x",
        },
        {
          title: "transitions_misc_fab",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_fab",
        },
        {
          title: "transitions_misc_fade",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_fade",
        },
        {
          title: "transitions_misc_scale",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_scale",
        },
        {
          title: "transitions_misc_scroll_x",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_scroll_x",
        },
        {
          title: "transitions_misc_scroll_y",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_scroll_y",
        },
        {
          title: "transitions_misc_slide_x",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_slide_x",
        },
        {
          title: "transitions_misc_slide_y",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_slide_y",
        },
        {
          title: "transitions_misc_todo",
          prepend_icon: "mdi-Atom",
          value: "transitions_misc_todo",
        },
        {
          title: "transitions_prop_custom_origin",
          prepend_icon: "mdi-Atom",
          value: "transitions_prop_custom_origin",
        },
        {
          title: "transitions_usage",
          prepend_icon: "mdi-Atom",
          value: "transitions_usage",
        },
        {
          title: "v_alert_prop_border",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_border",
        },
        {
          title: "v_alert_prop_closable",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_closable",
        },
        {
          title: "v_alert_prop_colored_border",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_colored_border",
        },
        {
          title: "v_alert_prop_content",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_content",
        },
        {
          title: "v_alert_prop_density",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_density",
        },
        {
          title: "v_alert_prop_icon",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_icon",
        },
        {
          title: "v_alert_prop_outlined",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_outlined",
        },
        {
          title: "v_alert_prop_prominent",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_prominent",
        },
        {
          title: "v_alert_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_rounded",
        },
        {
          title: "v_alert_prop_type",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_type",
        },
        {
          title: "v_alert_prop_variant",
          prepend_icon: "mdi-Atom",
          value: "v_alert_prop_variant",
        },
        {
          title: "v_alert_usage",
          prepend_icon: "mdi-Atom",
          value: "v_alert_usage",
        },
        {
          title: "v_app_bar_misc_app_bar_nav",
          prepend_icon: "mdi-Atom",
          value: "v_app_bar_misc_app_bar_nav",
        },
        {
          title: "v_app_bar_misc_menu",
          prepend_icon: "mdi-Atom",
          value: "v_app_bar_misc_menu",
        },
        {
          title: "v_app_bar_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_app_bar_prop_dense",
        },
        {
          title: "v_app_bar_prop_density",
          prepend_icon: "mdi-Atom",
          value: "v_app_bar_prop_density",
        },
        {
          title: "v_app_bar_prop_image",
          prepend_icon: "mdi-Atom",
          value: "v_app_bar_prop_image",
        },
        {
          title: "v_app_bar_prop_prominent",
          prepend_icon: "mdi-Atom",
          value: "v_app_bar_prop_prominent",
        },
        {
          title: "v_app_bar_prop_scroll_behavior",
          prepend_icon: "mdi-Atom",
          value: "v_app_bar_prop_scroll_behavior",
        },
        {
          title: "v_app_bar_usage",
          prepend_icon: "mdi-Atom",
          value: "v_app_bar_usage",
        },
        {
          title: "v_autocomplete_misc_asynchronous_items",
          prepend_icon: "mdi-Atom",
          value: "v_autocomplete_misc_asynchronous_items",
        },
        {
          title: "v_autocomplete_misc_new_tab",
          prepend_icon: "mdi-Atom",
          value: "v_autocomplete_misc_new_tab",
        },
        {
          title: "v_autocomplete_misc_state_selector",
          prepend_icon: "mdi-Atom",
          value: "v_autocomplete_misc_state_selector",
        },
        {
          title: "v_autocomplete_prop_density",
          prepend_icon: "mdi-Atom",
          value: "v_autocomplete_prop_density",
        },
        {
          title: "v_autocomplete_prop_filter",
          prepend_icon: "mdi-Atom",
          value: "v_autocomplete_prop_filter",
        },
        {
          title: "v_autocomplete_slot_item_and_selection",
          prepend_icon: "mdi-Atom",
          value: "v_autocomplete_slot_item_and_selection",
        },
        {
          title: "v_autocomplete_usage",
          prepend_icon: "mdi-Atom",
          value: "v_autocomplete_usage",
        },
        {
          title: "v_avatar_misc_advanced",
          prepend_icon: "mdi-Atom",
          value: "v_avatar_misc_advanced",
        },
        {
          title: "v_avatar_misc_avatar_menu",
          prepend_icon: "mdi-Atom",
          value: "v_avatar_misc_avatar_menu",
        },
        {
          title: "v_avatar_misc_profile_card",
          prepend_icon: "mdi-Atom",
          value: "v_avatar_misc_profile_card",
        },
        {
          title: "v_avatar_prop_size",
          prepend_icon: "mdi-Atom",
          value: "v_avatar_prop_size",
        },
        {
          title: "v_avatar_prop_tile",
          prepend_icon: "mdi-Atom",
          value: "v_avatar_prop_tile",
        },
        {
          title: "v_avatar_slot_default",
          prepend_icon: "mdi-Atom",
          value: "v_avatar_slot_default",
        },
        {
          title: "v_avatar_usage",
          prepend_icon: "mdi-Atom",
          value: "v_avatar_usage",
        },
        {
          title: "v_badge_misc_customization",
          prepend_icon: "mdi-Atom",
          value: "v_badge_misc_customization",
        },
        {
          title: "v_badge_misc_dynamic",
          prepend_icon: "mdi-Atom",
          value: "v_badge_misc_dynamic",
        },
        {
          title: "v_badge_misc_hover",
          prepend_icon: "mdi-Atom",
          value: "v_badge_misc_hover",
        },
        {
          title: "v_badge_misc_tabs",
          prepend_icon: "mdi-Atom",
          value: "v_badge_misc_tabs",
        },
        {
          title: "v_badge_prop_content",
          prepend_icon: "mdi-Atom",
          value: "v_badge_prop_content",
        },
        {
          title: "v_badge_prop_dot",
          prepend_icon: "mdi-Atom",
          value: "v_badge_prop_dot",
        },
        {
          title: "v_badge_prop_inline",
          prepend_icon: "mdi-Atom",
          value: "v_badge_prop_inline",
        },
        {
          title: "v_badge_usage",
          prepend_icon: "mdi-Atom",
          value: "v_badge_usage",
        },
        {
          title: "v_banner_prop_lines",
          prepend_icon: "mdi-Atom",
          value: "v_banner_prop_lines",
        },
        {
          title: "v_banner_prop_sticky",
          prepend_icon: "mdi-Atom",
          value: "v_banner_prop_sticky",
        },
        {
          title: "v_banner_slot_actions",
          prepend_icon: "mdi-Atom",
          value: "v_banner_slot_actions",
        },
        {
          title: "v_banner_slot_icon",
          prepend_icon: "mdi-Atom",
          value: "v_banner_slot_icon",
        },
        {
          title: "v_banner_slot_prepend",
          prepend_icon: "mdi-Atom",
          value: "v_banner_slot_prepend",
        },
        {
          title: "v_banner_usage",
          prepend_icon: "mdi-Atom",
          value: "v_banner_usage",
        },
        {
          title: "v_bottom_navigation_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_navigation_prop_color",
        },
        {
          title: "v_bottom_navigation_prop_grow",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_navigation_prop_grow",
        },
        {
          title: "v_bottom_navigation_prop_hide_on_scroll",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_navigation_prop_hide_on_scroll",
        },
        {
          title: "v_bottom_navigation_prop_horizontal",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_navigation_prop_horizontal",
        },
        {
          title: "v_bottom_navigation_prop_scroll_threshold",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_navigation_prop_scroll_threshold",
        },
        {
          title: "v_bottom_navigation_prop_shift",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_navigation_prop_shift",
        },
        {
          title: "v_bottom_navigation_prop_toggle",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_navigation_prop_toggle",
        },
        {
          title: "v_bottom_navigation_usage",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_navigation_usage",
        },
        {
          title: "v_bottom_sheet_misc_open_in_list",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_sheet_misc_open_in_list",
        },
        {
          title: "v_bottom_sheet_misc_player",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_sheet_misc_player",
        },
        {
          title: "v_bottom_sheet_prop_inset",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_sheet_prop_inset",
        },
        {
          title: "v_bottom_sheet_prop_model",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_sheet_prop_model",
        },
        {
          title: "v_bottom_sheet_usage",
          prepend_icon: "mdi-Atom",
          value: "v_bottom_sheet_usage",
        },
        {
          title: "v_breadcrumbs_prop_divider",
          prepend_icon: "mdi-Atom",
          value: "v_breadcrumbs_prop_divider",
        },
        {
          title: "v_breadcrumbs_prop_large",
          prepend_icon: "mdi-Atom",
          value: "v_breadcrumbs_prop_large",
        },
        {
          title: "v_breadcrumbs_slot_icon_dividers",
          prepend_icon: "mdi-Atom",
          value: "v_breadcrumbs_slot_icon_dividers",
        },
        {
          title: "v_breadcrumbs_slot_prepend",
          prepend_icon: "mdi-Atom",
          value: "v_breadcrumbs_slot_prepend",
        },
        {
          title: "v_breadcrumbs_slot_title",
          prepend_icon: "mdi-Atom",
          value: "v_breadcrumbs_slot_title",
        },
        {
          title: "v_breadcrumbs_usage",
          prepend_icon: "mdi-Atom",
          value: "v_breadcrumbs_usage",
        },
        {
          title: "v_btn_defaults_bottom_navigation",
          prepend_icon: "mdi-Atom",
          value: "v_btn_defaults_bottom_navigation",
        },
        {
          title: "v_btn_defaults_btn_group",
          prepend_icon: "mdi-Atom",
          value: "v_btn_defaults_btn_group",
        },
        {
          title: "v_btn_defaults_card_actions",
          prepend_icon: "mdi-Atom",
          value: "v_btn_defaults_card_actions",
        },
        {
          title: "v_btn_defaults_snackbar",
          prepend_icon: "mdi-Atom",
          value: "v_btn_defaults_snackbar",
        },
        {
          title: "v_btn_defaults_toolbar",
          prepend_icon: "mdi-Atom",
          value: "v_btn_defaults_toolbar",
        },
        {
          title: "v_btn_misc_cookie_settings",
          prepend_icon: "mdi-Atom",
          value: "v_btn_misc_cookie_settings",
        },
        {
          title: "v_btn_misc_dialog_action",
          prepend_icon: "mdi-Atom",
          value: "v_btn_misc_dialog_action",
        },
        {
          title: "v_btn_misc_discord_event",
          prepend_icon: "mdi-Atom",
          value: "v_btn_misc_discord_event",
        },
        {
          title: "v_btn_misc_group_survey",
          prepend_icon: "mdi-Atom",
          value: "v_btn_misc_group_survey",
        },
        {
          title: "v_btn_misc_raised",
          prepend_icon: "mdi-Atom",
          value: "v_btn_misc_raised",
        },
        {
          title: "v_btn_misc_tax_form",
          prepend_icon: "mdi-Atom",
          value: "v_btn_misc_tax_form",
        },
        {
          title: "v_btn_misc_toolbar",
          prepend_icon: "mdi-Atom",
          value: "v_btn_misc_toolbar",
        },
        {
          title: "v_btn_prop_block",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_block",
        },
        {
          title: "v_btn_prop_density",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_density",
        },
        {
          title: "v_btn_prop_elevation",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_elevation",
        },
        {
          title: "v_btn_prop_flat",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_flat",
        },
        {
          title: "v_btn_prop_floating",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_floating",
        },
        {
          title: "v_btn_prop_icon",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_icon",
        },
        {
          title: "v_btn_prop_loaders",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_loaders",
        },
        {
          title: "v_btn_prop_outlined",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_outlined",
        },
        {
          title: "v_btn_prop_plain",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_plain",
        },
        {
          title: "v_btn_prop_ripple",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_ripple",
        },
        {
          title: "v_btn_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_rounded",
        },
        {
          title: "v_btn_prop_size",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_size",
        },
        {
          title: "v_btn_prop_tile",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_tile",
        },
        {
          title: "v_btn_prop_variant",
          prepend_icon: "mdi-Atom",
          value: "v_btn_prop_variant",
        },
        {
          title: "v_btn_slot_loader",
          prepend_icon: "mdi-Atom",
          value: "v_btn_slot_loader",
        },
        {
          title: "v_btn_slot_prepend_append",
          prepend_icon: "mdi-Atom",
          value: "v_btn_slot_prepend_append",
        },
        {
          title: "v_btn_usage",
          prepend_icon: "mdi-Atom",
          value: "v_btn_usage",
        },
        {
          title: "v_btn_fab_misc_display_animation",
          prepend_icon: "mdi-Atom",
          value: "v_btn_fab_misc_display_animation",
        },
        {
          title: "v_btn_fab_misc_lateral_screens",
          prepend_icon: "mdi-Atom",
          value: "v_btn_fab_misc_lateral_screens",
        },
        {
          title: "v_btn_fab_misc_small",
          prepend_icon: "mdi-Atom",
          value: "v_btn_fab_misc_small",
        },
        {
          title: "v_btn_fab_misc_speed_dial",
          prepend_icon: "mdi-Atom",
          value: "v_btn_fab_misc_speed_dial",
        },
        {
          title: "v_btn_fab_usage",
          prepend_icon: "mdi-Atom",
          value: "v_btn_fab_usage",
        },
        {
          title: "v_btn_toggle_misc_toolbar",
          prepend_icon: "mdi-Atom",
          value: "v_btn_toggle_misc_toolbar",
        },
        {
          title: "v_btn_toggle_misc_wysiwyg",
          prepend_icon: "mdi-Atom",
          value: "v_btn_toggle_misc_wysiwyg",
        },
        {
          title: "v_btn_toggle_prop_divided",
          prepend_icon: "mdi-Atom",
          value: "v_btn_toggle_prop_divided",
        },
        {
          title: "v_btn_toggle_prop_mandatory",
          prepend_icon: "mdi-Atom",
          value: "v_btn_toggle_prop_mandatory",
        },
        {
          title: "v_btn_toggle_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_btn_toggle_prop_multiple",
        },
        {
          title: "v_btn_toggle_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_btn_toggle_prop_rounded",
        },
        {
          title: "v_btn_toggle_prop_variant",
          prepend_icon: "mdi-Atom",
          value: "v_btn_toggle_prop_variant",
        },
        {
          title: "v_btn_toggle_usage",
          prepend_icon: "mdi-Atom",
          value: "v_btn_toggle_usage",
        },
        {
          title: "v_calendar_event_click",
          prepend_icon: "mdi-Atom",
          value: "v_calendar_event_click",
        },
        {
          title: "v_calendar_misc_drag_and_drop",
          prepend_icon: "mdi-Atom",
          value: "v_calendar_misc_drag_and_drop",
        },
        {
          title: "v_calendar_prop_type_category",
          prepend_icon: "mdi-Atom",
          value: "v_calendar_prop_type_category",
        },
        {
          title: "v_calendar_prop_type_day",
          prepend_icon: "mdi-Atom",
          value: "v_calendar_prop_type_day",
        },
        {
          title: "v_calendar_prop_type_week",
          prepend_icon: "mdi-Atom",
          value: "v_calendar_prop_type_week",
        },
        {
          title: "v_calendar_slot_day_body",
          prepend_icon: "mdi-Atom",
          value: "v_calendar_slot_day_body",
        },
        {
          title: "v_calendar_slot_day",
          prepend_icon: "mdi-Atom",
          value: "v_calendar_slot_day",
        },
        {
          title: "v_calendar_usage",
          prepend_icon: "mdi-Atom",
          value: "v_calendar_usage",
        },
        {
          title: "v_card_basics_combine",
          prepend_icon: "mdi-Atom",
          value: "v_card_basics_combine",
        },
        {
          title: "v_card_basics_content",
          prepend_icon: "mdi-Atom",
          value: "v_card_basics_content",
        },
        {
          title: "v_card_misc_card_reveal",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_card_reveal",
        },
        {
          title: "v_card_misc_content_wrapping",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_content_wrapping",
        },
        {
          title: "v_card_misc_custom_actions",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_custom_actions",
        },
        {
          title: "v_card_misc_grids",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_grids",
        },
        {
          title: "v_card_misc_horizontal_cards",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_horizontal_cards",
        },
        {
          title: "v_card_misc_information_card",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_information_card",
        },
        {
          title: "v_card_misc_intermediate",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_intermediate",
        },
        {
          title: "v_card_misc_media_with_text",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_media_with_text",
        },
        {
          title: "v_card_misc_twitter_card",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_twitter_card",
        },
        {
          title: "v_card_misc_weather_card",
          prepend_icon: "mdi-Atom",
          value: "v_card_misc_weather_card",
        },
        {
          title: "v_card_prop_loading",
          prepend_icon: "mdi-Atom",
          value: "v_card_prop_loading",
        },
        {
          title: "v_card_prop_outlined",
          prepend_icon: "mdi-Atom",
          value: "v_card_prop_outlined",
        },
        {
          title: "v_card_usage",
          prepend_icon: "mdi-Atom",
          value: "v_card_usage",
        },
        {
          title: "v_carousel_prop_custom_icons",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_prop_custom_icons",
        },
        {
          title: "v_carousel_prop_custom_transition",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_prop_custom_transition",
        },
        {
          title: "v_carousel_prop_cycle",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_prop_cycle",
        },
        {
          title: "v_carousel_prop_hide_controls",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_prop_hide_controls",
        },
        {
          title: "v_carousel_prop_hide_delimiters",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_prop_hide_delimiters",
        },
        {
          title: "v_carousel_prop_model",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_prop_model",
        },
        {
          title: "v_carousel_prop_progress",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_prop_progress",
        },
        {
          title: "v_carousel_slots_next_prev",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_slots_next_prev",
        },
        {
          title: "v_carousel_usage",
          prepend_icon: "mdi-Atom",
          value: "v_carousel_usage",
        },
        {
          title: "v_checkbox_misc_inline_textfield",
          prepend_icon: "mdi-Atom",
          value: "v_checkbox_misc_inline_textfield",
        },
        {
          title: "v_checkbox_prop_colors",
          prepend_icon: "mdi-Atom",
          value: "v_checkbox_prop_colors",
        },
        {
          title: "v_checkbox_prop_model_as_array",
          prepend_icon: "mdi-Atom",
          value: "v_checkbox_prop_model_as_array",
        },
        {
          title: "v_checkbox_prop_model_as_boolean",
          prepend_icon: "mdi-Atom",
          value: "v_checkbox_prop_model_as_boolean",
        },
        {
          title: "v_checkbox_prop_states",
          prepend_icon: "mdi-Atom",
          value: "v_checkbox_prop_states",
        },
        {
          title: "v_checkbox_slot_label",
          prepend_icon: "mdi-Atom",
          value: "v_checkbox_slot_label",
        },
        {
          title: "v_checkbox_usage",
          prepend_icon: "mdi-Atom",
          value: "v_checkbox_usage",
        },
        {
          title: "v_chip_event_action_chips",
          prepend_icon: "mdi-Atom",
          value: "v_chip_event_action_chips",
        },
        {
          title: "v_chip_misc_custom_list",
          prepend_icon: "mdi-Atom",
          value: "v_chip_misc_custom_list",
        },
        {
          title: "v_chip_misc_expandable",
          prepend_icon: "mdi-Atom",
          value: "v_chip_misc_expandable",
        },
        {
          title: "v_chip_misc_filtering",
          prepend_icon: "mdi-Atom",
          value: "v_chip_misc_filtering",
        },
        {
          title: "v_chip_misc_in_selects",
          prepend_icon: "mdi-Atom",
          value: "v_chip_misc_in_selects",
        },
        {
          title: "v_chip_prop_closable",
          prepend_icon: "mdi-Atom",
          value: "v_chip_prop_closable",
        },
        {
          title: "v_chip_prop_colored",
          prepend_icon: "mdi-Atom",
          value: "v_chip_prop_colored",
        },
        {
          title: "v_chip_prop_draggable",
          prepend_icon: "mdi-Atom",
          value: "v_chip_prop_draggable",
        },
        {
          title: "v_chip_prop_filter",
          prepend_icon: "mdi-Atom",
          value: "v_chip_prop_filter",
        },
        {
          title: "v_chip_prop_label",
          prepend_icon: "mdi-Atom",
          value: "v_chip_prop_label",
        },
        {
          title: "v_chip_prop_no_ripple",
          prepend_icon: "mdi-Atom",
          value: "v_chip_prop_no_ripple",
        },
        {
          title: "v_chip_prop_outlined",
          prepend_icon: "mdi-Atom",
          value: "v_chip_prop_outlined",
        },
        {
          title: "v_chip_prop_sizes",
          prepend_icon: "mdi-Atom",
          value: "v_chip_prop_sizes",
        },
        {
          title: "v_chip_slot_icon",
          prepend_icon: "mdi-Atom",
          value: "v_chip_slot_icon",
        },
        {
          title: "v_chip_usage",
          prepend_icon: "mdi-Atom",
          value: "v_chip_usage",
        },
        {
          title: "v_chip_group_misc_product_card",
          prepend_icon: "mdi-Atom",
          value: "v_chip_group_misc_product_card",
        },
        {
          title: "v_chip_group_misc_toothbrush_card",
          prepend_icon: "mdi-Atom",
          value: "v_chip_group_misc_toothbrush_card",
        },
        {
          title: "v_chip_group_prop_column",
          prepend_icon: "mdi-Atom",
          value: "v_chip_group_prop_column",
        },
        {
          title: "v_chip_group_prop_filter",
          prepend_icon: "mdi-Atom",
          value: "v_chip_group_prop_filter",
        },
        {
          title: "v_chip_group_prop_mandatory",
          prepend_icon: "mdi-Atom",
          value: "v_chip_group_prop_mandatory",
        },
        {
          title: "v_chip_group_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_chip_group_prop_multiple",
        },
        {
          title: "v_chip_group_usage",
          prepend_icon: "mdi-Atom",
          value: "v_chip_group_usage",
        },
        {
          title: "v_click_outside_option_close_on_outside_click",
          prepend_icon: "mdi-Atom",
          value: "v_click_outside_option_close_on_outside_click",
        },
        {
          title: "v_click_outside_option_include",
          prepend_icon: "mdi-Atom",
          value: "v_click_outside_option_include",
        },
        {
          title: "v_click_outside_usage",
          prepend_icon: "mdi-Atom",
          value: "v_click_outside_usage",
        },
        {
          title: "v_color_picker_prop_canvas",
          prepend_icon: "mdi-Atom",
          value: "v_color_picker_prop_canvas",
        },
        {
          title: "v_color_picker_prop_elevation",
          prepend_icon: "mdi-Atom",
          value: "v_color_picker_prop_elevation",
        },
        {
          title: "v_color_picker_prop_mode",
          prepend_icon: "mdi-Atom",
          value: "v_color_picker_prop_mode",
        },
        {
          title: "v_color_picker_prop_model",
          prepend_icon: "mdi-Atom",
          value: "v_color_picker_prop_model",
        },
        {
          title: "v_color_picker_prop_swatches",
          prepend_icon: "mdi-Atom",
          value: "v_color_picker_prop_swatches",
        },
        {
          title: "v_color_picker_usage",
          prepend_icon: "mdi-Atom",
          value: "v_color_picker_usage",
        },
        {
          title: "v_combobox_misc_advanced",
          prepend_icon: "mdi-Atom",
          value: "v_combobox_misc_advanced",
        },
        {
          title: "v_combobox_prop_density",
          prepend_icon: "mdi-Atom",
          value: "v_combobox_prop_density",
        },
        {
          title: "v_combobox_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_combobox_prop_multiple",
        },
        {
          title: "v_combobox_slot_no_data",
          prepend_icon: "mdi-Atom",
          value: "v_combobox_slot_no_data",
        },
        {
          title: "v_combobox_usage",
          prepend_icon: "mdi-Atom",
          value: "v_combobox_usage",
        },
        {
          title: "v_data_iterator_misc_filter",
          prepend_icon: "mdi-Atom",
          value: "v_data_iterator_misc_filter",
        },
        {
          title: "v_data_iterator_slot_default",
          prepend_icon: "mdi-Atom",
          value: "v_data_iterator_slot_default",
        },
        {
          title: "v_data_iterator_slot_header_and_footer",
          prepend_icon: "mdi-Atom",
          value: "v_data_iterator_slot_header_and_footer",
        },
        {
          title: "v_data_iterator_usage",
          prepend_icon: "mdi-Atom",
          value: "v_data_iterator_usage",
        },
        {
          title: "v_data_table_headers_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_headers_multiple",
        },
        {
          title: "v_data_table_misc_crud",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_misc_crud",
        },
        {
          title: "v_data_table_misc_edit_dialog",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_misc_edit_dialog",
        },
        {
          title: "v_data_table_misc_expand",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_misc_expand",
        },
        {
          title: "v_data_table_misc_external_paginate",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_misc_external_paginate",
        },
        {
          title: "v_data_table_misc_external_sort",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_misc_external_sort",
        },
        {
          title: "v_data_table_misc_server_side_paginate_and_sort",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_misc_server_side_paginate_and_sort",
        },
        {
          title: "v_data_table_prop_custom_filter",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_custom_filter",
        },
        {
          title: "v_data_table_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_dense",
        },
        {
          title: "v_data_table_prop_filterable",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_filterable",
        },
        {
          title: "v_data_table_prop_footer_props",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_footer_props",
        },
        {
          title: "v_data_table_prop_grouping",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_grouping",
        },
        {
          title: "v_data_table_prop_hide_header_footer",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_hide_header_footer",
        },
        {
          title: "v_data_table_prop_item_selectable",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_item_selectable",
        },
        {
          title: "v_data_table_prop_item_value",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_item_value",
        },
        {
          title: "v_data_table_prop_loading",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_loading",
        },
        {
          title: "v_data_table_prop_multi_sort",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_multi_sort",
        },
        {
          title: "v_data_table_prop_return_object",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_return_object",
        },
        {
          title: "v_data_table_prop_row_selection",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_row_selection",
        },
        {
          title: "v_data_table_prop_search",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_search",
        },
        {
          title: "v_data_table_prop_select_strategy",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_select_strategy",
        },
        {
          title: "v_data_table_prop_sort_by",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_prop_sort_by",
        },
        {
          title: "v_data_table_server_search",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_server_search",
        },
        {
          title: "v_data_table_server",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_server",
        },
        {
          title: "v_data_table_slot_group_header",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_slot_group_header",
        },
        {
          title: "v_data_table_slot_header",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_slot_header",
        },
        {
          title: "v_data_table_slot_headers",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_slot_headers",
        },
        {
          title: "v_data_table_slot_item_key",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_slot_item_key",
        },
        {
          title: "v_data_table_slot_item",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_slot_item",
        },
        {
          title: "v_data_table_slot_main",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_slot_main",
        },
        {
          title: "v_data_table_slot_simple_checkbox",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_slot_simple_checkbox",
        },
        {
          title: "v_data_table_usage",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_usage",
        },
        {
          title: "v_data_table_virtual",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_virtual",
        },
        {
          title: "v_data_table_virtualized",
          prepend_icon: "mdi-Atom",
          value: "v_data_table_virtualized",
        },
        {
          title: "v_date_picker_event_button_events",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_event_button_events",
        },
        {
          title: "v_date_picker_event_events",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_event_events",
        },
        {
          title: "v_date_picker_guide_locale",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_guide_locale",
        },
        {
          title: "v_date_picker_misc_birthday",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_misc_birthday",
        },
        {
          title: "v_date_picker_misc_dialog_and_menu",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_misc_dialog_and_menu",
        },
        {
          title: "v_date_picker_misc_formatting_external_libraries",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_misc_formatting_external_libraries",
        },
        {
          title: "v_date_picker_misc_formatting",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_misc_formatting",
        },
        {
          title: "v_date_picker_misc_internationalization",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_misc_internationalization",
        },
        {
          title: "v_date_picker_misc_orientation",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_misc_orientation",
        },
        {
          title: "v_date_picker_prop_allowed_dates",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_allowed_dates",
        },
        {
          title: "v_date_picker_prop_colors",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_colors",
        },
        {
          title: "v_date_picker_prop_elevation",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_elevation",
        },
        {
          title: "v_date_picker_prop_icons",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_icons",
        },
        {
          title: "v_date_picker_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_multiple",
        },
        {
          title: "v_date_picker_prop_picker_date",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_picker_date",
        },
        {
          title: "v_date_picker_prop_range",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_range",
        },
        {
          title: "v_date_picker_prop_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_readonly",
        },
        {
          title: "v_date_picker_prop_show_adjacent_months",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_show_adjacent_months",
        },
        {
          title: "v_date_picker_prop_show_current",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_show_current",
        },
        {
          title: "v_date_picker_prop_width",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_prop_width",
        },
        {
          title: "v_date_picker_usage",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_usage",
        },
        {
          title: "v_date_picker_month_misc_dialog_and_menu",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_misc_dialog_and_menu",
        },
        {
          title: "v_date_picker_month_misc_internationalization",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_misc_internationalization",
        },
        {
          title: "v_date_picker_month_misc_orientation",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_misc_orientation",
        },
        {
          title: "v_date_picker_month_prop_allowed_months",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_prop_allowed_months",
        },
        {
          title: "v_date_picker_month_prop_colors",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_prop_colors",
        },
        {
          title: "v_date_picker_month_prop_icons",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_prop_icons",
        },
        {
          title: "v_date_picker_month_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_prop_multiple",
        },
        {
          title: "v_date_picker_month_prop_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_prop_readonly",
        },
        {
          title: "v_date_picker_month_prop_show_current",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_prop_show_current",
        },
        {
          title: "v_date_picker_month_prop_width",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_prop_width",
        },
        {
          title: "v_date_picker_month_usage",
          prepend_icon: "mdi-Atom",
          value: "v_date_picker_month_usage",
        },
        {
          title: "v_defaults_provider_prop_defaults",
          prepend_icon: "mdi-Atom",
          value: "v_defaults_provider_prop_defaults",
        },
        {
          title: "v_defaults_provider_usage",
          prepend_icon: "mdi-Atom",
          value: "v_defaults_provider_usage",
        },
        {
          title: "v_dialog_misc_form",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_misc_form",
        },
        {
          title: "v_dialog_misc_loader",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_misc_loader",
        },
        {
          title: "v_dialog_misc_nesting",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_misc_nesting",
        },
        {
          title: "v_dialog_misc_overflowed",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_misc_overflowed",
        },
        {
          title: "v_dialog_misc_without_activator",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_misc_without_activator",
        },
        {
          title: "v_dialog_prop_activator",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_prop_activator",
        },
        {
          title: "v_dialog_prop_fullscreen",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_prop_fullscreen",
        },
        {
          title: "v_dialog_prop_model",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_prop_model",
        },
        {
          title: "v_dialog_prop_persistent",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_prop_persistent",
        },
        {
          title: "v_dialog_prop_scrollable",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_prop_scrollable",
        },
        {
          title: "v_dialog_prop_transitions",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_prop_transitions",
        },
        {
          title: "v_dialog_usage",
          prepend_icon: "mdi-Atom",
          value: "v_dialog_usage",
        },
        {
          title: "v_divider_misc_portrait_view",
          prepend_icon: "mdi-Atom",
          value: "v_divider_misc_portrait_view",
        },
        {
          title: "v_divider_misc_subheaders",
          prepend_icon: "mdi-Atom",
          value: "v_divider_misc_subheaders",
        },
        {
          title: "v_divider_prop_inset",
          prepend_icon: "mdi-Atom",
          value: "v_divider_prop_inset",
        },
        {
          title: "v_divider_prop_vertical_inset",
          prepend_icon: "mdi-Atom",
          value: "v_divider_prop_vertical_inset",
        },
        {
          title: "v_divider_prop_vertical",
          prepend_icon: "mdi-Atom",
          value: "v_divider_prop_vertical",
        },
        {
          title: "v_divider_usage",
          prepend_icon: "mdi-Atom",
          value: "v_divider_usage",
        },
        {
          title: "v_expansion_panels_misc_advanced",
          prepend_icon: "mdi-Atom",
          value: "v_expansion_panels_misc_advanced",
        },
        {
          title: "v_expansion_panels_misc_custom_icons",
          prepend_icon: "mdi-Atom",
          value: "v_expansion_panels_misc_custom_icons",
        },
        {
          title: "v_expansion_panels_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_expansion_panels_prop_disabled",
        },
        {
          title: "v_expansion_panels_prop_focusable",
          prepend_icon: "mdi-Atom",
          value: "v_expansion_panels_prop_focusable",
        },
        {
          title: "v_expansion_panels_prop_model",
          prepend_icon: "mdi-Atom",
          value: "v_expansion_panels_prop_model",
        },
        {
          title: "v_expansion_panels_prop_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_expansion_panels_prop_readonly",
        },
        {
          title: "v_expansion_panels_prop_variant",
          prepend_icon: "mdi-Atom",
          value: "v_expansion_panels_prop_variant",
        },
        {
          title: "v_expansion_panels_usage",
          prepend_icon: "mdi-Atom",
          value: "v_expansion_panels_usage",
        },
        {
          title: "v_file_input_misc_complex_selection",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_misc_complex_selection",
        },
        {
          title: "v_file_input_prop_accept",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_prop_accept",
        },
        {
          title: "v_file_input_prop_chips",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_prop_chips",
        },
        {
          title: "v_file_input_prop_counter",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_prop_counter",
        },
        {
          title: "v_file_input_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_prop_dense",
        },
        {
          title: "v_file_input_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_prop_multiple",
        },
        {
          title: "v_file_input_prop_prepend_icon",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_prop_prepend_icon",
        },
        {
          title: "v_file_input_prop_show_size",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_prop_show_size",
        },
        {
          title: "v_file_input_prop_validation",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_prop_validation",
        },
        {
          title: "v_file_input_slot_selection",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_slot_selection",
        },
        {
          title: "v_file_input_usage",
          prepend_icon: "mdi-Atom",
          value: "v_file_input_usage",
        },
        {
          title: "v_footer_misc_company_footer",
          prepend_icon: "mdi-Atom",
          value: "v_footer_misc_company_footer",
        },
        {
          title: "v_footer_misc_indigo_footer",
          prepend_icon: "mdi-Atom",
          value: "v_footer_misc_indigo_footer",
        },
        {
          title: "v_footer_misc_teal_footer",
          prepend_icon: "mdi-Atom",
          value: "v_footer_misc_teal_footer",
        },
        {
          title: "v_footer_usage",
          prepend_icon: "mdi-Atom",
          value: "v_footer_usage",
        },
        {
          title: "v_form_misc_exposed",
          prepend_icon: "mdi-Atom",
          value: "v_form_misc_exposed",
        },
        {
          title: "v_form_misc_vee_validate",
          prepend_icon: "mdi-Atom",
          value: "v_form_misc_vee_validate",
        },
        {
          title: "v_form_misc_vuelidate",
          prepend_icon: "mdi-Atom",
          value: "v_form_misc_vuelidate",
        },
        {
          title: "v_form_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_form_prop_disabled",
        },
        {
          title: "v_form_prop_fast_fail",
          prepend_icon: "mdi-Atom",
          value: "v_form_prop_fast_fail",
        },
        {
          title: "v_form_rules_async",
          prepend_icon: "mdi-Atom",
          value: "v_form_rules_async",
        },
        {
          title: "v_form_rules_required",
          prepend_icon: "mdi-Atom",
          value: "v_form_rules_required",
        },
        {
          title: "v_form_usage",
          prepend_icon: "mdi-Atom",
          value: "v_form_usage",
        },
        {
          title: "v_hover_misc_hover_list",
          prepend_icon: "mdi-Atom",
          value: "v_hover_misc_hover_list",
        },
        {
          title: "v_hover_misc_transition",
          prepend_icon: "mdi-Atom",
          value: "v_hover_misc_transition",
        },
        {
          title: "v_hover_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_hover_prop_disabled",
        },
        {
          title: "v_hover_prop_open_and_close_delay",
          prepend_icon: "mdi-Atom",
          value: "v_hover_prop_open_and_close_delay",
        },
        {
          title: "v_hover_usage",
          prepend_icon: "mdi-Atom",
          value: "v_hover_usage",
        },
        {
          title: "v_icon_event_click",
          prepend_icon: "mdi-Atom",
          value: "v_icon_event_click",
        },
        {
          title: "v_icon_misc_buttons",
          prepend_icon: "mdi-Atom",
          value: "v_icon_misc_buttons",
        },
        {
          title: "v_icon_misc_font_awesome",
          prepend_icon: "mdi-Atom",
          value: "v_icon_misc_font_awesome",
        },
        {
          title: "v_icon_misc_md",
          prepend_icon: "mdi-Atom",
          value: "v_icon_misc_md",
        },
        {
          title: "v_icon_misc_mdi_svg",
          prepend_icon: "mdi-Atom",
          value: "v_icon_misc_mdi_svg",
        },
        {
          title: "v_icon_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_icon_prop_color",
        },
        {
          title: "v_icon_usage",
          prepend_icon: "mdi-Atom",
          value: "v_icon_usage",
        },
        {
          title: "v_img_complex_grid",
          prepend_icon: "mdi-Atom",
          value: "v_img_complex_grid",
        },
        {
          title: "v_img_misc_grid",
          prepend_icon: "mdi-Atom",
          value: "v_img_misc_grid",
        },
        {
          title: "v_img_prop_contain",
          prepend_icon: "mdi-Atom",
          value: "v_img_prop_contain",
        },
        {
          title: "v_img_prop_cover",
          prepend_icon: "mdi-Atom",
          value: "v_img_prop_cover",
        },
        {
          title: "v_img_prop_gradient",
          prepend_icon: "mdi-Atom",
          value: "v_img_prop_gradient",
        },
        {
          title: "v_img_prop_max_height",
          prepend_icon: "mdi-Atom",
          value: "v_img_prop_max_height",
        },
        {
          title: "v_img_slot_error",
          prepend_icon: "mdi-Atom",
          value: "v_img_slot_error",
        },
        {
          title: "v_img_slot_placeholder",
          prepend_icon: "mdi-Atom",
          value: "v_img_slot_placeholder",
        },
        {
          title: "v_img_usage",
          prepend_icon: "mdi-Atom",
          value: "v_img_usage",
        },
        {
          title: "v_infinite_scroll_misc_virtual",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_misc_virtual",
        },
        {
          title: "v_infinite_scroll_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_prop_color",
        },
        {
          title: "v_infinite_scroll_prop_direction",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_prop_direction",
        },
        {
          title: "v_infinite_scroll_prop_mode",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_prop_mode",
        },
        {
          title: "v_infinite_scroll_prop_side_both",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_prop_side_both",
        },
        {
          title: "v_infinite_scroll_prop_side_start",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_prop_side_start",
        },
        {
          title: "v_infinite_scroll_slot_empty",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_slot_empty",
        },
        {
          title: "v_infinite_scroll_slot_error",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_slot_error",
        },
        {
          title: "v_infinite_scroll_slot_load_more",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_slot_load_more",
        },
        {
          title: "v_infinite_scroll_slot_loading",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_slot_loading",
        },
        {
          title: "v_infinite_scroll_usage",
          prepend_icon: "mdi-Atom",
          value: "v_infinite_scroll_usage",
        },
        {
          title: "v_input_event_slot_clicks",
          prepend_icon: "mdi-Atom",
          value: "v_input_event_slot_clicks",
        },
        {
          title: "v_input_prop_error_count",
          prepend_icon: "mdi-Atom",
          value: "v_input_prop_error_count",
        },
        {
          title: "v_input_prop_error",
          prepend_icon: "mdi-Atom",
          value: "v_input_prop_error",
        },
        {
          title: "v_input_prop_hide_details",
          prepend_icon: "mdi-Atom",
          value: "v_input_prop_hide_details",
        },
        {
          title: "v_input_prop_hint",
          prepend_icon: "mdi-Atom",
          value: "v_input_prop_hint",
        },
        {
          title: "v_input_prop_loading",
          prepend_icon: "mdi-Atom",
          value: "v_input_prop_loading",
        },
        {
          title: "v_input_prop_rules",
          prepend_icon: "mdi-Atom",
          value: "v_input_prop_rules",
        },
        {
          title: "v_input_prop_success",
          prepend_icon: "mdi-Atom",
          value: "v_input_prop_success",
        },
        {
          title: "v_input_slot_append_and_prepend",
          prepend_icon: "mdi-Atom",
          value: "v_input_slot_append_and_prepend",
        },
        {
          title: "v_input_usage",
          prepend_icon: "mdi-Atom",
          value: "v_input_usage",
        },
        {
          title: "v_intersect_prop_options",
          prepend_icon: "mdi-Atom",
          value: "v_intersect_prop_options",
        },
        {
          title: "v_intersect_usage",
          prepend_icon: "mdi-Atom",
          value: "v_intersect_usage",
        },
        {
          title: "v_item_group_misc_chips",
          prepend_icon: "mdi-Atom",
          value: "v_item_group_misc_chips",
        },
        {
          title: "v_item_group_misc_selection",
          prepend_icon: "mdi-Atom",
          value: "v_item_group_misc_selection",
        },
        {
          title: "v_item_group_prop_mandatory",
          prepend_icon: "mdi-Atom",
          value: "v_item_group_prop_mandatory",
        },
        {
          title: "v_item_group_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_item_group_prop_multiple",
        },
        {
          title: "v_item_group_prop_selected_class",
          prepend_icon: "mdi-Atom",
          value: "v_item_group_prop_selected_class",
        },
        {
          title: "v_item_group_usage",
          prepend_icon: "mdi-Atom",
          value: "v_item_group_usage",
        },
        {
          title: "v_lazy_usage",
          prepend_icon: "mdi-Atom",
          value: "v_lazy_usage",
        },
        {
          title: "v_list_misc_action_and_item_groups",
          prepend_icon: "mdi-Atom",
          value: "v_list_misc_action_and_item_groups",
        },
        {
          title: "v_list_misc_action_stack",
          prepend_icon: "mdi-Atom",
          value: "v_list_misc_action_stack",
        },
        {
          title: "v_list_misc_card_list",
          prepend_icon: "mdi-Atom",
          value: "v_list_misc_card_list",
        },
        {
          title: "v_list_misc_simple_avatar_list",
          prepend_icon: "mdi-Atom",
          value: "v_list_misc_simple_avatar_list",
        },
        {
          title: "v_list_misc_single_line_list",
          prepend_icon: "mdi-Atom",
          value: "v_list_misc_single_line_list",
        },
        {
          title: "v_list_misc_subheadings_and_dividers",
          prepend_icon: "mdi-Atom",
          value: "v_list_misc_subheadings_and_dividers",
        },
        {
          title: "v_list_prop_density",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_density",
        },
        {
          title: "v_list_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_disabled",
        },
        {
          title: "v_list_prop_items_custom",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_items_custom",
        },
        {
          title: "v_list_prop_items_prop",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_items_prop",
        },
        {
          title: "v_list_prop_items_type",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_items_type",
        },
        {
          title: "v_list_prop_items",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_items",
        },
        {
          title: "v_list_prop_nav",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_nav",
        },
        {
          title: "v_list_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_rounded",
        },
        {
          title: "v_list_prop_shaped",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_shaped",
        },
        {
          title: "v_list_prop_sub_group",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_sub_group",
        },
        {
          title: "v_list_prop_three_line",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_three_line",
        },
        {
          title: "v_list_prop_two_line_and_subheader",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_two_line_and_subheader",
        },
        {
          title: "v_list_prop_variant",
          prepend_icon: "mdi-Atom",
          value: "v_list_prop_variant",
        },
        {
          title: "v_list_slot_expansion_lists",
          prepend_icon: "mdi-Atom",
          value: "v_list_slot_expansion_lists",
        },
        {
          title: "v_list_usage",
          prepend_icon: "mdi-Atom",
          value: "v_list_usage",
        },
        {
          title: "v_menu_misc_custom_transition",
          prepend_icon: "mdi-Atom",
          value: "v_menu_misc_custom_transition",
        },
        {
          title: "v_menu_misc_popover",
          prepend_icon: "mdi-Atom",
          value: "v_menu_misc_popover",
        },
        {
          title: "v_menu_misc_use_in_components",
          prepend_icon: "mdi-Atom",
          value: "v_menu_misc_use_in_components",
        },
        {
          title: "v_menu_prop_absolute_without_activator",
          prepend_icon: "mdi-Atom",
          value: "v_menu_prop_absolute_without_activator",
        },
        {
          title: "v_menu_prop_absolute",
          prepend_icon: "mdi-Atom",
          value: "v_menu_prop_absolute",
        },
        {
          title: "v_menu_prop_close_on_click",
          prepend_icon: "mdi-Atom",
          value: "v_menu_prop_close_on_click",
        },
        {
          title: "v_menu_prop_close_on_content_click",
          prepend_icon: "mdi-Atom",
          value: "v_menu_prop_close_on_content_click",
        },
        {
          title: "v_menu_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_menu_prop_disabled",
        },
        {
          title: "v_menu_prop_location",
          prepend_icon: "mdi-Atom",
          value: "v_menu_prop_location",
        },
        {
          title: "v_menu_prop_open_on_hover",
          prepend_icon: "mdi-Atom",
          value: "v_menu_prop_open_on_hover",
        },
        {
          title: "v_menu_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_menu_prop_rounded",
        },
        {
          title: "v_menu_slot_activator_and_tooltip",
          prepend_icon: "mdi-Atom",
          value: "v_menu_slot_activator_and_tooltip",
        },
        {
          title: "v_menu_usage",
          prepend_icon: "mdi-Atom",
          value: "v_menu_usage",
        },
        {
          title: "v_mutate_option_modifiers",
          prepend_icon: "mdi-Atom",
          value: "v_mutate_option_modifiers",
        },
        {
          title: "v_mutate_usage",
          prepend_icon: "mdi-Atom",
          value: "v_mutate_usage",
        },
        {
          title: "v_navigation_drawer_misc_colored",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_misc_colored",
        },
        {
          title: "v_navigation_drawer_misc_combined",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_misc_combined",
        },
        {
          title: "v_navigation_drawer_prop_bottom_drawer",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_prop_bottom_drawer",
        },
        {
          title: "v_navigation_drawer_prop_expand_on_hover",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_prop_expand_on_hover",
        },
        {
          title: "v_navigation_drawer_prop_images",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_prop_images",
        },
        {
          title: "v_navigation_drawer_prop_mini_variant",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_prop_mini_variant",
        },
        {
          title: "v_navigation_drawer_prop_permanent_and_floating",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_prop_permanent_and_floating",
        },
        {
          title: "v_navigation_drawer_prop_right",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_prop_right",
        },
        {
          title: "v_navigation_drawer_prop_temporary",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_prop_temporary",
        },
        {
          title: "v_navigation_drawer_usage",
          prepend_icon: "mdi-Atom",
          value: "v_navigation_drawer_usage",
        },
        {
          title: "v_otp_input_misc_loading",
          prepend_icon: "mdi-Atom",
          value: "v_otp_input_misc_loading",
        },
        {
          title: "v_otp_input_prop_dark",
          prepend_icon: "mdi-Atom",
          value: "v_otp_input_prop_dark",
        },
        {
          title: "v_otp_input_prop_type",
          prepend_icon: "mdi-Atom",
          value: "v_otp_input_prop_type",
        },
        {
          title: "v_otp_input_usage",
          prepend_icon: "mdi-Atom",
          value: "v_otp_input_usage",
        },
        {
          title: "v_overflow_btn_prop_counter",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_counter",
        },
        {
          title: "v_overflow_btn_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_dense",
        },
        {
          title: "v_overflow_btn_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_disabled",
        },
        {
          title: "v_overflow_btn_prop_editable",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_editable",
        },
        {
          title: "v_overflow_btn_prop_filled",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_filled",
        },
        {
          title: "v_overflow_btn_prop_hint",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_hint",
        },
        {
          title: "v_overflow_btn_prop_loading",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_loading",
        },
        {
          title: "v_overflow_btn_prop_menu_props",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_menu_props",
        },
        {
          title: "v_overflow_btn_prop_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_readonly",
        },
        {
          title: "v_overflow_btn_prop_segmented",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_prop_segmented",
        },
        {
          title: "v_overflow_btn_usage",
          prepend_icon: "mdi-Atom",
          value: "v_overflow_btn_usage",
        },
        {
          title: "v_overlay_connected_playground",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_connected_playground",
        },
        {
          title: "v_overlay_misc_advanced",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_misc_advanced",
        },
        {
          title: "v_overlay_misc_loader",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_misc_loader",
        },
        {
          title: "v_overlay_prop_contained",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_prop_contained",
        },
        {
          title: "v_overlay_scroll_block",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_scroll_block",
        },
        {
          title: "v_overlay_scroll_close",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_scroll_close",
        },
        {
          title: "v_overlay_scroll_none",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_scroll_none",
        },
        {
          title: "v_overlay_scroll_reposition",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_scroll_reposition",
        },
        {
          title: "v_overlay_usage",
          prepend_icon: "mdi-Atom",
          value: "v_overlay_usage",
        },
        {
          title: "v_pagination_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_pagination_prop_disabled",
        },
        {
          title: "v_pagination_prop_icons",
          prepend_icon: "mdi-Atom",
          value: "v_pagination_prop_icons",
        },
        {
          title: "v_pagination_prop_length",
          prepend_icon: "mdi-Atom",
          value: "v_pagination_prop_length",
        },
        {
          title: "v_pagination_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_pagination_prop_rounded",
        },
        {
          title: "v_pagination_prop_total_visible",
          prepend_icon: "mdi-Atom",
          value: "v_pagination_prop_total_visible",
        },
        {
          title: "v_pagination_usage",
          prepend_icon: "mdi-Atom",
          value: "v_pagination_usage",
        },
        {
          title: "v_parallax_misc_content",
          prepend_icon: "mdi-Atom",
          value: "v_parallax_misc_content",
        },
        {
          title: "v_parallax_misc_custom_height",
          prepend_icon: "mdi-Atom",
          value: "v_parallax_misc_custom_height",
        },
        {
          title: "v_parallax_usage",
          prepend_icon: "mdi-Atom",
          value: "v_parallax_usage",
        },
        {
          title: "v_progress_circular_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_progress_circular_prop_color",
        },
        {
          title: "v_progress_circular_prop_indeterminate",
          prepend_icon: "mdi-Atom",
          value: "v_progress_circular_prop_indeterminate",
        },
        {
          title: "v_progress_circular_prop_rotate",
          prepend_icon: "mdi-Atom",
          value: "v_progress_circular_prop_rotate",
        },
        {
          title: "v_progress_circular_prop_size_and_width",
          prepend_icon: "mdi-Atom",
          value: "v_progress_circular_prop_size_and_width",
        },
        {
          title: "v_progress_circular_usage",
          prepend_icon: "mdi-Atom",
          value: "v_progress_circular_usage",
        },
        {
          title: "v_progress_linear_misc_determinate",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_misc_determinate",
        },
        {
          title: "v_progress_linear_misc_file_loader",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_misc_file_loader",
        },
        {
          title: "v_progress_linear_misc_toolbar_loader",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_misc_toolbar_loader",
        },
        {
          title: "v_progress_linear_prop_buffer_value",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_prop_buffer_value",
        },
        {
          title: "v_progress_linear_prop_colors",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_prop_colors",
        },
        {
          title: "v_progress_linear_prop_indeterminate",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_prop_indeterminate",
        },
        {
          title: "v_progress_linear_prop_query",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_prop_query",
        },
        {
          title: "v_progress_linear_prop_reverse",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_prop_reverse",
        },
        {
          title: "v_progress_linear_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_prop_rounded",
        },
        {
          title: "v_progress_linear_prop_stream",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_prop_stream",
        },
        {
          title: "v_progress_linear_prop_striped",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_prop_striped",
        },
        {
          title: "v_progress_linear_slot_default",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_slot_default",
        },
        {
          title: "v_progress_linear_usage",
          prepend_icon: "mdi-Atom",
          value: "v_progress_linear_usage",
        },
        {
          title: "v_radio_group_prop_colors",
          prepend_icon: "mdi-Atom",
          value: "v_radio_group_prop_colors",
        },
        {
          title: "v_radio_group_prop_direction",
          prepend_icon: "mdi-Atom",
          value: "v_radio_group_prop_direction",
        },
        {
          title: "v_radio_group_slot_label",
          prepend_icon: "mdi-Atom",
          value: "v_radio_group_slot_label",
        },
        {
          title: "v_radio_group_usage",
          prepend_icon: "mdi-Atom",
          value: "v_radio_group_usage",
        },
        {
          title: "v_range_slider_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_range_slider_prop_disabled",
        },
        {
          title: "v_range_slider_prop_min_and_max",
          prepend_icon: "mdi-Atom",
          value: "v_range_slider_prop_min_and_max",
        },
        {
          title: "v_range_slider_prop_step",
          prepend_icon: "mdi-Atom",
          value: "v_range_slider_prop_step",
        },
        {
          title: "v_range_slider_prop_strict",
          prepend_icon: "mdi-Atom",
          value: "v_range_slider_prop_strict",
        },
        {
          title: "v_range_slider_prop_vertical",
          prepend_icon: "mdi-Atom",
          value: "v_range_slider_prop_vertical",
        },
        {
          title: "v_range_slider_slot_thumb_label",
          prepend_icon: "mdi-Atom",
          value: "v_range_slider_slot_thumb_label",
        },
        {
          title: "v_range_slider_usage",
          prepend_icon: "mdi-Atom",
          value: "v_range_slider_usage",
        },
        {
          title: "v_rating_misc_advanced",
          prepend_icon: "mdi-Atom",
          value: "v_rating_misc_advanced",
        },
        {
          title: "v_rating_misc_card_overview",
          prepend_icon: "mdi-Atom",
          value: "v_rating_misc_card_overview",
        },
        {
          title: "v_rating_misc_card",
          prepend_icon: "mdi-Atom",
          value: "v_rating_misc_card",
        },
        {
          title: "v_rating_prop_clearable",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_clearable",
        },
        {
          title: "v_rating_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_color",
        },
        {
          title: "v_rating_prop_density",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_density",
        },
        {
          title: "v_rating_prop_half_increments",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_half_increments",
        },
        {
          title: "v_rating_prop_hover",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_hover",
        },
        {
          title: "v_rating_prop_icon_label",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_icon_label",
        },
        {
          title: "v_rating_prop_icons",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_icons",
        },
        {
          title: "v_rating_prop_item_labels",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_item_labels",
        },
        {
          title: "v_rating_prop_length",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_length",
        },
        {
          title: "v_rating_prop_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_readonly",
        },
        {
          title: "v_rating_prop_size",
          prepend_icon: "mdi-Atom",
          value: "v_rating_prop_size",
        },
        {
          title: "v_rating_slot_item_label",
          prepend_icon: "mdi-Atom",
          value: "v_rating_slot_item_label",
        },
        {
          title: "v_rating_slot_item",
          prepend_icon: "mdi-Atom",
          value: "v_rating_slot_item",
        },
        {
          title: "v_rating_usage",
          prepend_icon: "mdi-Atom",
          value: "v_rating_usage",
        },
        {
          title: "v_resize_usage",
          prepend_icon: "mdi-Atom",
          value: "v_resize_usage",
        },
        {
          title: "v_responsive_usage",
          prepend_icon: "mdi-Atom",
          value: "v_responsive_usage",
        },
        {
          title: "v_ripple_misc_custom_color",
          prepend_icon: "mdi-Atom",
          value: "v_ripple_misc_custom_color",
        },
        {
          title: "v_ripple_misc_ripple_in_components",
          prepend_icon: "mdi-Atom",
          value: "v_ripple_misc_ripple_in_components",
        },
        {
          title: "v_ripple_option_center",
          prepend_icon: "mdi-Atom",
          value: "v_ripple_option_center",
        },
        {
          title: "v_ripple_stop",
          prepend_icon: "mdi-Atom",
          value: "v_ripple_stop",
        },
        {
          title: "v_ripple_usage",
          prepend_icon: "mdi-Atom",
          value: "v_ripple_usage",
        },
        {
          title: "v_scroll_option_self",
          prepend_icon: "mdi-Atom",
          value: "v_scroll_option_self",
        },
        {
          title: "v_scroll_option_target",
          prepend_icon: "mdi-Atom",
          value: "v_scroll_option_target",
        },
        {
          title: "v_scroll_usage",
          prepend_icon: "mdi-Atom",
          value: "v_scroll_usage",
        },
        {
          title: "v_select_prop_chips",
          prepend_icon: "mdi-Atom",
          value: "v_select_prop_chips",
        },
        {
          title: "v_select_prop_custom_title_and_value",
          prepend_icon: "mdi-Atom",
          value: "v_select_prop_custom_title_and_value",
        },
        {
          title: "v_select_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_select_prop_dense",
        },
        {
          title: "v_select_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_select_prop_disabled",
        },
        {
          title: "v_select_prop_menu_props",
          prepend_icon: "mdi-Atom",
          value: "v_select_prop_menu_props",
        },
        {
          title: "v_select_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_select_prop_multiple",
        },
        {
          title: "v_select_prop_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_select_prop_readonly",
        },
        {
          title: "v_select_slot_append_and_prepend_item",
          prepend_icon: "mdi-Atom",
          value: "v_select_slot_append_and_prepend_item",
        },
        {
          title: "v_select_slot_selection",
          prepend_icon: "mdi-Atom",
          value: "v_select_slot_selection",
        },
        {
          title: "v_select_usage",
          prepend_icon: "mdi-Atom",
          value: "v_select_usage",
        },
        {
          title: "v_sheet_misc_congratulations",
          prepend_icon: "mdi-Atom",
          value: "v_sheet_misc_congratulations",
        },
        {
          title: "v_sheet_misc_privacy_policy",
          prepend_icon: "mdi-Atom",
          value: "v_sheet_misc_privacy_policy",
        },
        {
          title: "v_sheet_misc_reconcile",
          prepend_icon: "mdi-Atom",
          value: "v_sheet_misc_reconcile",
        },
        {
          title: "v_sheet_misc_referral_program",
          prepend_icon: "mdi-Atom",
          value: "v_sheet_misc_referral_program",
        },
        {
          title: "v_sheet_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_sheet_prop_color",
        },
        {
          title: "v_sheet_prop_elevation",
          prepend_icon: "mdi-Atom",
          value: "v_sheet_prop_elevation",
        },
        {
          title: "v_sheet_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_sheet_prop_rounded",
        },
        {
          title: "v_sheet_usage",
          prepend_icon: "mdi-Atom",
          value: "v_sheet_usage",
        },
        {
          title: "v_skeleton_loader_misc_ice_cream",
          prepend_icon: "mdi-Atom",
          value: "v_skeleton_loader_misc_ice_cream",
        },
        {
          title: "v_skeleton_loader_prop_boilerplate",
          prepend_icon: "mdi-Atom",
          value: "v_skeleton_loader_prop_boilerplate",
        },
        {
          title: "v_skeleton_loader_prop_elevation",
          prepend_icon: "mdi-Atom",
          value: "v_skeleton_loader_prop_elevation",
        },
        {
          title: "v_skeleton_loader_prop_loading",
          prepend_icon: "mdi-Atom",
          value: "v_skeleton_loader_prop_loading",
        },
        {
          title: "v_skeleton_loader_prop_type",
          prepend_icon: "mdi-Atom",
          value: "v_skeleton_loader_prop_type",
        },
        {
          title: "v_skeleton_loader_usage",
          prepend_icon: "mdi-Atom",
          value: "v_skeleton_loader_usage",
        },
        {
          title: "v_slide_group_misc_pseudo_carousel",
          prepend_icon: "mdi-Atom",
          value: "v_slide_group_misc_pseudo_carousel",
        },
        {
          title: "v_slide_group_prop_active_class",
          prepend_icon: "mdi-Atom",
          value: "v_slide_group_prop_active_class",
        },
        {
          title: "v_slide_group_prop_center_active",
          prepend_icon: "mdi-Atom",
          value: "v_slide_group_prop_center_active",
        },
        {
          title: "v_slide_group_prop_custom_icons",
          prepend_icon: "mdi-Atom",
          value: "v_slide_group_prop_custom_icons",
        },
        {
          title: "v_slide_group_prop_mandatory",
          prepend_icon: "mdi-Atom",
          value: "v_slide_group_prop_mandatory",
        },
        {
          title: "v_slide_group_prop_multiple",
          prepend_icon: "mdi-Atom",
          value: "v_slide_group_prop_multiple",
        },
        {
          title: "v_slide_group_usage",
          prepend_icon: "mdi-Atom",
          value: "v_slide_group_usage",
        },
        {
          title: "v_slider_prop_colors",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_colors",
        },
        {
          title: "v_slider_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_disabled",
        },
        {
          title: "v_slider_prop_icons",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_icons",
        },
        {
          title: "v_slider_prop_inverse_label",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_inverse_label",
        },
        {
          title: "v_slider_prop_min_and_max",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_min_and_max",
        },
        {
          title: "v_slider_prop_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_readonly",
        },
        {
          title: "v_slider_prop_step",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_step",
        },
        {
          title: "v_slider_prop_thumb",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_thumb",
        },
        {
          title: "v_slider_prop_ticks",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_ticks",
        },
        {
          title: "v_slider_prop_validation",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_validation",
        },
        {
          title: "v_slider_prop_vertical",
          prepend_icon: "mdi-Atom",
          value: "v_slider_prop_vertical",
        },
        {
          title: "v_slider_slot_append_and_prepend",
          prepend_icon: "mdi-Atom",
          value: "v_slider_slot_append_and_prepend",
        },
        {
          title: "v_slider_slot_append_text_field",
          prepend_icon: "mdi-Atom",
          value: "v_slider_slot_append_text_field",
        },
        {
          title: "v_slider_usage",
          prepend_icon: "mdi-Atom",
          value: "v_slider_usage",
        },
        {
          title: "v_snackbar_prop_multi_line",
          prepend_icon: "mdi-Atom",
          value: "v_snackbar_prop_multi_line",
        },
        {
          title: "v_snackbar_prop_timeout",
          prepend_icon: "mdi-Atom",
          value: "v_snackbar_prop_timeout",
        },
        {
          title: "v_snackbar_prop_variants",
          prepend_icon: "mdi-Atom",
          value: "v_snackbar_prop_variants",
        },
        {
          title: "v_snackbar_prop_vertical",
          prepend_icon: "mdi-Atom",
          value: "v_snackbar_prop_vertical",
        },
        {
          title: "v_snackbar_usage",
          prepend_icon: "mdi-Atom",
          value: "v_snackbar_usage",
        },
        {
          title: "v_sparkline_misc_custom_labels",
          prepend_icon: "mdi-Atom",
          value: "v_sparkline_misc_custom_labels",
        },
        {
          title: "v_sparkline_misc_dashboard_card",
          prepend_icon: "mdi-Atom",
          value: "v_sparkline_misc_dashboard_card",
        },
        {
          title: "v_sparkline_misc_heart_rate",
          prepend_icon: "mdi-Atom",
          value: "v_sparkline_misc_heart_rate",
        },
        {
          title: "v_sparkline_prop_fill",
          prepend_icon: "mdi-Atom",
          value: "v_sparkline_prop_fill",
        },
        {
          title: "v_sparkline_usage",
          prepend_icon: "mdi-Atom",
          value: "v_sparkline_usage",
        },
        {
          title: "v_stepper_misc_alternate_error",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_alternate_error",
        },
        {
          title: "v_stepper_misc_dynamic",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_dynamic",
        },
        {
          title: "v_stepper_misc_editable",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_editable",
        },
        {
          title: "v_stepper_misc_error",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_error",
        },
        {
          title: "v_stepper_misc_horizontal",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_horizontal",
        },
        {
          title: "v_stepper_misc_linear",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_linear",
        },
        {
          title: "v_stepper_misc_non_editable",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_non_editable",
        },
        {
          title: "v_stepper_misc_optional",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_optional",
        },
        {
          title: "v_stepper_misc_vertical_error",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_misc_vertical_error",
        },
        {
          title: "v_stepper_prop_alternate_label",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_prop_alternate_label",
        },
        {
          title: "v_stepper_prop_non_linear",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_prop_non_linear",
        },
        {
          title: "v_stepper_prop_vertical",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_prop_vertical",
        },
        {
          title: "v_stepper_usage",
          prepend_icon: "mdi-Atom",
          value: "v_stepper_usage",
        },
        {
          title: "v_switch_prop_colors",
          prepend_icon: "mdi-Atom",
          value: "v_switch_prop_colors",
        },
        {
          title: "v_switch_prop_custom_values",
          prepend_icon: "mdi-Atom",
          value: "v_switch_prop_custom_values",
        },
        {
          title: "v_switch_prop_flat",
          prepend_icon: "mdi-Atom",
          value: "v_switch_prop_flat",
        },
        {
          title: "v_switch_prop_inset",
          prepend_icon: "mdi-Atom",
          value: "v_switch_prop_inset",
        },
        {
          title: "v_switch_prop_model_as_array",
          prepend_icon: "mdi-Atom",
          value: "v_switch_prop_model_as_array",
        },
        {
          title: "v_switch_prop_states",
          prepend_icon: "mdi-Atom",
          value: "v_switch_prop_states",
        },
        {
          title: "v_switch_slot_label",
          prepend_icon: "mdi-Atom",
          value: "v_switch_slot_label",
        },
        {
          title: "v_switch_usage",
          prepend_icon: "mdi-Atom",
          value: "v_switch_usage",
        },
        {
          title: "v_system_bar_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_system_bar_prop_color",
        },
        {
          title: "v_system_bar_prop_window",
          prepend_icon: "mdi-Atom",
          value: "v_system_bar_prop_window",
        },
        {
          title: "v_system_bar_usage",
          prepend_icon: "mdi-Atom",
          value: "v_system_bar_usage",
        },
        {
          title: "v_table_prop_dark",
          prepend_icon: "mdi-Atom",
          value: "v_table_prop_dark",
        },
        {
          title: "v_table_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_table_prop_dense",
        },
        {
          title: "v_table_prop_fixed_header",
          prepend_icon: "mdi-Atom",
          value: "v_table_prop_fixed_header",
        },
        {
          title: "v_table_prop_height",
          prepend_icon: "mdi-Atom",
          value: "v_table_prop_height",
        },
        {
          title: "v_table_usage",
          prepend_icon: "mdi-Atom",
          value: "v_table_usage",
        },
        {
          title: "v_tabs_misc_content",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_misc_content",
        },
        {
          title: "v_tabs_misc_dynamic_height",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_misc_dynamic_height",
        },
        {
          title: "v_tabs_misc_dynamic",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_misc_dynamic",
        },
        {
          title: "v_tabs_misc_mobile",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_misc_mobile",
        },
        {
          title: "v_tabs_misc_overflow_to_menu",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_misc_overflow_to_menu",
        },
        {
          title: "v_tabs_misc_pagination",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_misc_pagination",
        },
        {
          title: "v_tabs_misc_tab_items",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_misc_tab_items",
        },
        {
          title: "v_tabs_prop_align_tabs_center",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_align_tabs_center",
        },
        {
          title: "v_tabs_prop_align_tabs_end",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_align_tabs_end",
        },
        {
          title: "v_tabs_prop_align_tabs_title",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_align_tabs_title",
        },
        {
          title: "v_tabs_prop_center_active",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_center_active",
        },
        {
          title: "v_tabs_prop_direction",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_direction",
        },
        {
          title: "v_tabs_prop_fixed_tabs",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_fixed_tabs",
        },
        {
          title: "v_tabs_prop_grow",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_grow",
        },
        {
          title: "v_tabs_prop_icons",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_icons",
        },
        {
          title: "v_tabs_prop_stacked",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_prop_stacked",
        },
        {
          title: "v_tabs_usage",
          prepend_icon: "mdi-Atom",
          value: "v_tabs_usage",
        },
        {
          title: "v_text_field_event_icons",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_event_icons",
        },
        {
          title: "v_text_field_misc_custom_validation",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_misc_custom_validation",
        },
        {
          title: "v_text_field_misc_full_width_with_counter",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_misc_full_width_with_counter",
        },
        {
          title: "v_text_field_misc_guide",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_misc_guide",
        },
        {
          title: "v_text_field_misc_login_form",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_misc_login_form",
        },
        {
          title: "v_text_field_misc_password",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_misc_password",
        },
        {
          title: "v_text_field_prop_clearable",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_clearable",
        },
        {
          title: "v_text_field_prop_contained",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_contained",
        },
        {
          title: "v_text_field_prop_counter",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_counter",
        },
        {
          title: "v_text_field_prop_custom_colors",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_custom_colors",
        },
        {
          title: "v_text_field_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_dense",
        },
        {
          title: "v_text_field_prop_disabled_and_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_disabled_and_readonly",
        },
        {
          title: "v_text_field_prop_filled",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_filled",
        },
        {
          title: "v_text_field_prop_hide_details",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_hide_details",
        },
        {
          title: "v_text_field_prop_hint",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_hint",
        },
        {
          title: "v_text_field_prop_icon",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_icon",
        },
        {
          title: "v_text_field_prop_label",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_label",
        },
        {
          title: "v_text_field_prop_messages",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_messages",
        },
        {
          title: "v_text_field_prop_outlined",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_outlined",
        },
        {
          title: "v_text_field_prop_placeholder",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_placeholder",
        },
        {
          title: "v_text_field_prop_prefixes_and_suffixes",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_prefixes_and_suffixes",
        },
        {
          title: "v_text_field_prop_rules",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_rules",
        },
        {
          title: "v_text_field_prop_single_line",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_single_line",
        },
        {
          title: "v_text_field_prop_validation",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_validation",
        },
        {
          title: "v_text_field_prop_variant",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_prop_variant",
        },
        {
          title: "v_text_field_slot_icons",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_slot_icons",
        },
        {
          title: "v_text_field_slot_label",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_slot_label",
        },
        {
          title: "v_text_field_slot_progress",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_slot_progress",
        },
        {
          title: "v_text_field_usage",
          prepend_icon: "mdi-Atom",
          value: "v_text_field_usage",
        },
        {
          title: "v_textarea_misc_signup_form",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_misc_signup_form",
        },
        {
          title: "v_textarea_prop_auto_grow",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_prop_auto_grow",
        },
        {
          title: "v_textarea_prop_background_color",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_prop_background_color",
        },
        {
          title: "v_textarea_prop_browser_autocomplete",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_prop_browser_autocomplete",
        },
        {
          title: "v_textarea_prop_clearable",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_prop_clearable",
        },
        {
          title: "v_textarea_prop_counter",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_prop_counter",
        },
        {
          title: "v_textarea_prop_icons",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_prop_icons",
        },
        {
          title: "v_textarea_prop_no_resize",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_prop_no_resize",
        },
        {
          title: "v_textarea_prop_rows",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_prop_rows",
        },
        {
          title: "v_textarea_usage",
          prepend_icon: "mdi-Atom",
          value: "v_textarea_usage",
        },
        {
          title: "v_theme_provider_prop_with_background",
          prepend_icon: "mdi-Atom",
          value: "v_theme_provider_prop_with_background",
        },
        {
          title: "v_time_picker_misc_dialog_and_menu",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_misc_dialog_and_menu",
        },
        {
          title: "v_time_picker_prop_allowed_times",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_allowed_times",
        },
        {
          title: "v_time_picker_prop_ampm_in_title",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_ampm_in_title",
        },
        {
          title: "v_time_picker_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_color",
        },
        {
          title: "v_time_picker_prop_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_disabled",
        },
        {
          title: "v_time_picker_prop_elevation",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_elevation",
        },
        {
          title: "v_time_picker_prop_format",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_format",
        },
        {
          title: "v_time_picker_prop_no_title",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_no_title",
        },
        {
          title: "v_time_picker_prop_range",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_range",
        },
        {
          title: "v_time_picker_prop_readonly",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_readonly",
        },
        {
          title: "v_time_picker_prop_scrollable",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_scrollable",
        },
        {
          title: "v_time_picker_prop_use_seconds",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_use_seconds",
        },
        {
          title: "v_time_picker_prop_width",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_prop_width",
        },
        {
          title: "v_time_picker_usage",
          prepend_icon: "mdi-Atom",
          value: "v_time_picker_usage",
        },
        {
          title: "v_timeline_misc_advanced",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_misc_advanced",
        },
        {
          title: "v_timeline_prop_align",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_align",
        },
        {
          title: "v_timeline_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_color",
        },
        {
          title: "v_timeline_prop_direction",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_direction",
        },
        {
          title: "v_timeline_prop_icon_dots",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_icon_dots",
        },
        {
          title: "v_timeline_prop_line_inset",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_line_inset",
        },
        {
          title: "v_timeline_prop_mirror",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_mirror",
        },
        {
          title: "v_timeline_prop_single_side",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_single_side",
        },
        {
          title: "v_timeline_prop_size",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_size",
        },
        {
          title: "v_timeline_prop_truncate_line",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_prop_truncate_line",
        },
        {
          title: "v_timeline_slot_icon",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_slot_icon",
        },
        {
          title: "v_timeline_slot_opposite",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_slot_opposite",
        },
        {
          title: "v_timeline_usage",
          prepend_icon: "mdi-Atom",
          value: "v_timeline_usage",
        },
        {
          title: "v_toolbar_misc_contextual_action_bar",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_misc_contextual_action_bar",
        },
        {
          title: "v_toolbar_misc_flexible_and_card",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_misc_flexible_and_card",
        },
        {
          title: "v_toolbar_misc_variations",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_misc_variations",
        },
        {
          title: "v_toolbar_prop_background",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_prop_background",
        },
        {
          title: "v_toolbar_prop_collapse",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_prop_collapse",
        },
        {
          title: "v_toolbar_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_prop_dense",
        },
        {
          title: "v_toolbar_prop_extended",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_prop_extended",
        },
        {
          title: "v_toolbar_prop_extension_height",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_prop_extension_height",
        },
        {
          title: "v_toolbar_prop_floating_with_search",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_prop_floating_with_search",
        },
        {
          title: "v_toolbar_prop_light_and_dark",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_prop_light_and_dark",
        },
        {
          title: "v_toolbar_prop_prominent",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_prop_prominent",
        },
        {
          title: "v_toolbar_usage",
          prepend_icon: "mdi-Atom",
          value: "v_toolbar_usage",
        },
        {
          title: "v_tooltip_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_tooltip_prop_color",
        },
        {
          title: "v_tooltip_prop_location",
          prepend_icon: "mdi-Atom",
          value: "v_tooltip_prop_location",
        },
        {
          title: "v_tooltip_prop_visibility",
          prepend_icon: "mdi-Atom",
          value: "v_tooltip_prop_visibility",
        },
        {
          title: "v_tooltip_usage",
          prepend_icon: "mdi-Atom",
          value: "v_tooltip_usage",
        },
        {
          title: "v_touch_usage",
          prepend_icon: "mdi-Atom",
          value: "v_touch_usage",
        },
        {
          title: "v_treeview_misc_search_and_filter",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_misc_search_and_filter",
        },
        {
          title: "v_treeview_misc_selectable_icons",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_misc_selectable_icons",
        },
        {
          title: "v_treeview_playground",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_playground",
        },
        {
          title: "v_treeview_prop_activatable",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_activatable",
        },
        {
          title: "v_treeview_prop_color",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_color",
        },
        {
          title: "v_treeview_prop_dense",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_dense",
        },
        {
          title: "v_treeview_prop_hoverable",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_hoverable",
        },
        {
          title: "v_treeview_prop_item_disabled",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_item_disabled",
        },
        {
          title: "v_treeview_prop_load_children",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_load_children",
        },
        {
          title: "v_treeview_prop_open_all",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_open_all",
        },
        {
          title: "v_treeview_prop_rounded",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_rounded",
        },
        {
          title: "v_treeview_prop_selectable",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_selectable",
        },
        {
          title: "v_treeview_prop_selected_color",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_selected_color",
        },
        {
          title: "v_treeview_prop_selection_type",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_selection_type",
        },
        {
          title: "v_treeview_prop_shaped",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_prop_shaped",
        },
        {
          title: "v_treeview_slot_append_and_label",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_slot_append_and_label",
        },
        {
          title: "v_treeview_usage",
          prepend_icon: "mdi-Atom",
          value: "v_treeview_usage",
        },
        {
          title: "v_virtual_scroll_misc_user_directory",
          prepend_icon: "mdi-Atom",
          value: "v_virtual_scroll_misc_user_directory",
        },
        {
          title: "v_virtual_scroll_prop_dynamic_item_height",
          prepend_icon: "mdi-Atom",
          value: "v_virtual_scroll_prop_dynamic_item_height",
        },
        {
          title: "v_virtual_scroll_prop_height_parent",
          prepend_icon: "mdi-Atom",
          value: "v_virtual_scroll_prop_height_parent",
        },
        {
          title: "v_virtual_scroll_prop_height",
          prepend_icon: "mdi-Atom",
          value: "v_virtual_scroll_prop_height",
        },
        {
          title: "v_virtual_scroll_prop_item_height",
          prepend_icon: "mdi-Atom",
          value: "v_virtual_scroll_prop_item_height",
        },
        {
          title: "v_virtual_scroll_usage",
          prepend_icon: "mdi-Atom",
          value: "v_virtual_scroll_usage",
        },
        {
          title: "v_window_misc_account_creation",
          prepend_icon: "mdi-Atom",
          value: "v_window_misc_account_creation",
        },
        {
          title: "v_window_misc_onboarding",
          prepend_icon: "mdi-Atom",
          value: "v_window_misc_onboarding",
        },
        {
          title: "v_window_prop_direction",
          prepend_icon: "mdi-Atom",
          value: "v_window_prop_direction",
        },
        {
          title: "v_window_prop_reverse",
          prepend_icon: "mdi-Atom",
          value: "v_window_prop_reverse",
        },
        {
          title: "v_window_prop_show_arrows",
          prepend_icon: "mdi-Atom",
          value: "v_window_prop_show_arrows",
        },
        {
          title: "v_window_slots_next_prev",
          prepend_icon: "mdi-Atom",
          value: "v_window_slots_next_prev",
        },
        {
          title: "v_window_usage",
          prepend_icon: "mdi-Atom",
          value: "v_window_usage",
        },
        {
          title: "why_vuetify_card_components",
          prepend_icon: "mdi-Atom",
          value: "why_vuetify_card_components",
        },
        {
          title: "why_vuetify_card_props",
          prepend_icon: "mdi-Atom",
          value: "why_vuetify_card_props",
        },
        {
          title: "why_vuetify_card_slots",
          prepend_icon: "mdi-Atom",
          value: "why_vuetify_card_slots",
        },
        {
          title: "wireframes_baseline",
          prepend_icon: "mdi-Atom",
          value: "wireframes_baseline",
        },
        {
          title: "wireframes_constrained",
          prepend_icon: "mdi-Atom",
          value: "wireframes_constrained",
        },
        {
          title: "wireframes_discord",
          prepend_icon: "mdi-Atom",
          value: "wireframes_discord",
        },
        {
          title: "wireframes_extended_toolbar",
          prepend_icon: "mdi-Atom",
          value: "wireframes_extended_toolbar",
        },
        {
          title: "wireframes_inbox",
          prepend_icon: "mdi-Atom",
          value: "wireframes_inbox",
        },
        {
          title: "wireframes_side_navigation",
          prepend_icon: "mdi-Atom",
          value: "wireframes_side_navigation",
        },
        {
          title: "wireframes_steam",
          prepend_icon: "mdi-Atom",
          value: "wireframes_steam",
        },
        {
          title: "wireframes_system_bar",
          prepend_icon: "mdi-Atom",
          value: "wireframes_system_bar",
        },
        {
          title: "wireframes_three_column",
          prepend_icon: "mdi-Atom",
          value: "wireframes_three_column",
        },
      ],
    };
  },
  methods: {
    handelClick() {
      console.log("clicked");
    },
  },
};
</script>
