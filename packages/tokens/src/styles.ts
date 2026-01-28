type Style = Record<string, string | number | undefined>;

export const buttonStyles = {
  size: {
    default: {
      borderRadius: "var(--ds-button-size-default-radius)",
      paddingInline: "var(--ds-button-size-default-padding-x)",
      paddingBlock: "var(--ds-button-size-default-padding-y)",
      gap: "var(--ds-button-size-default-gap)"
    } as Style,
    small: {
      borderRadius: "var(--ds-button-size-small-radius)",
      paddingInline: "var(--ds-button-size-small-padding-x)",
      paddingBlock: "var(--ds-button-size-small-padding-y)",
      gap: "var(--ds-button-size-small-gap)"
    } as Style
  },
  color: {
    default: {
      backgroundColor: "var(--ds-button-color-default-bg)",
      color: "var(--ds-button-color-default-text)"
    } as Style,
    hover: {
      backgroundColor: "var(--ds-button-color-hover-bg)",
      color: "var(--ds-button-color-hover-text)",
      boxShadow: "var(--ds-button-color-hover-shadow)"
    } as Style,
    pressed: {
      backgroundColor: "var(--ds-button-color-pressed-bg)",
      color: "var(--ds-button-color-pressed-text)"
    } as Style,
    disabled: {
      backgroundColor: "var(--ds-button-color-disabled-bg)",
      color: "var(--ds-button-color-disabled-text)",
      opacity: "var(--ds-button-color-disabled-opacity)"
    } as Style
  },
  outline: {
    default: {
      backgroundColor: "var(--ds-button-outline-default-bg)",
      color: "var(--ds-button-outline-default-text)",
      borderWidth: "var(--ds-button-outline-default-border-width)",
      borderColor: "var(--ds-button-outline-default-border-color)",
      borderStyle: "solid"
    } as Style,
    hover: {
      backgroundColor: "var(--ds-button-outline-hover-bg)",
      color: "var(--ds-button-outline-hover-text)",
      borderWidth: "var(--ds-button-outline-hover-border-width)",
      borderColor: "var(--ds-button-outline-hover-border-color)",
      borderStyle: "solid",
      boxShadow: "var(--ds-button-outline-hover-shadow)"
    } as Style,
    pressed: {
      backgroundColor: "var(--ds-button-outline-pressed-bg)",
      color: "var(--ds-button-outline-pressed-text)",
      borderWidth: "var(--ds-button-outline-pressed-border-width)",
      borderColor: "var(--ds-button-outline-pressed-border-color)",
      borderStyle: "solid"
    } as Style,
    disabled: {
      backgroundColor: "var(--ds-button-outline-disabled-bg)",
      color: "var(--ds-button-outline-disabled-text)",
      borderWidth: "var(--ds-button-outline-disabled-border-width)",
      borderColor: "var(--ds-button-outline-disabled-border-color)",
      borderStyle: "solid",
      opacity: "var(--ds-button-outline-disabled-opacity)"
    } as Style
  },
  text: {
    default: {
      backgroundColor: "var(--ds-button-text-default-bg)",
      color: "var(--ds-button-text-default-text)"
    } as Style,
    hover: {
      backgroundColor: "var(--ds-button-text-hover-bg)",
      color: "var(--ds-button-text-hover-text)"
    } as Style,
    pressed: {
      backgroundColor: "var(--ds-button-text-pressed-bg)",
      color: "var(--ds-button-text-pressed-text)"
    } as Style,
    disabled: {
      backgroundColor: "var(--ds-button-text-disabled-bg)",
      color: "var(--ds-button-text-disabled-text)",
      opacity: "var(--ds-button-text-disabled-opacity)"
    } as Style
  }
};

export const inputStyles = {
  base: {
    borderRadius: "var(--ds-input-radius)",
    paddingInline: "var(--ds-input-padding-x)",
    paddingBlock: "var(--ds-input-padding-y)",
    gap: "var(--ds-input-gap)"
  } as Style,
  default: {
    backgroundColor: "var(--ds-input-default-bg)",
    borderWidth: "var(--ds-input-default-border-width)",
    borderColor: "var(--ds-input-default-border-color)"
  } as Style,
  hover: {
    backgroundColor: "var(--ds-input-hover-bg)",
    borderWidth: "var(--ds-input-hover-border-width)",
    borderColor: "var(--ds-input-hover-border-color)"
  } as Style,
  active: {
    backgroundColor: "var(--ds-input-active-bg)",
    borderWidth: "var(--ds-input-active-border-width)",
    borderColor: "var(--ds-input-active-border-color)"
  } as Style,
  filled: {
    backgroundColor: "var(--ds-input-filled-bg)",
    borderWidth: "var(--ds-input-filled-border-width)",
    borderColor: "var(--ds-input-filled-border-color)"
  } as Style,
  error: {
    backgroundColor: "var(--ds-input-error-bg)",
    borderWidth: "var(--ds-input-error-border-width)",
    borderColor: "var(--ds-input-error-border-color)"
  } as Style,
  disabled: {
    backgroundColor: "var(--ds-input-disabled-bg)",
    borderWidth: "var(--ds-input-disabled-border-width)",
    borderColor: "var(--ds-input-disabled-border-color)",
    opacity: "var(--ds-input-disabled-opacity)"
  } as Style,
  disabledFilled: {
    backgroundColor: "var(--ds-input-disabled-filled-bg)",
    borderWidth: "var(--ds-input-disabled-filled-border-width)",
    borderColor: "var(--ds-input-disabled-filled-border-color)",
    opacity: "var(--ds-input-disabled-filled-opacity)"
  } as Style,
  readonly: {
    backgroundColor: "var(--ds-input-readonly-bg)",
    borderWidth: "var(--ds-input-readonly-border-width)",
    borderColor: "var(--ds-input-readonly-border-color)"
  } as Style
};

export const cardStyles = {
  base: {
    backgroundColor: "var(--ds-card-bg)",
    borderColor: "var(--ds-card-border-color)",
    borderWidth: "var(--ds-card-border-width)",
    borderStyle: "solid"
  } as Style,
  size: {
    sm: {
      borderRadius: "var(--ds-card-sm-radius)",
      padding: "var(--ds-card-sm-padding)",
      gap: "var(--ds-card-sm-gap)"
    } as Style,
    md: {
      borderRadius: "var(--ds-card-md-radius)",
      padding: "var(--ds-card-md-padding)",
      gap: "var(--ds-card-md-gap)"
    } as Style,
    lg: {
      borderRadius: "var(--ds-card-lg-radius)",
      padding: "var(--ds-card-lg-padding)",
      gap: "var(--ds-card-lg-gap)"
    } as Style
  }
};
