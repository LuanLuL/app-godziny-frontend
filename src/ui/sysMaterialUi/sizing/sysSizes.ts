const sysBaseSizes = {
  baseFixed025: "4px",
  baseFixed050: "8px",
  baseFixed075: "12px",
  baseFixed1: "16px",
  baseFixed125: "20px",
  baseFixed15: "24px",
  baseFixed2: "32px",
  baseFixed3: "48px",
  baseFixed4: "64px",
  baseFixed6: "96px",
  baseFixed8: "128px",
  baseFixed12: "192px",
  baseRem025: "0.25rem",
  baseRem050: "0.5rem",
  baseRem075: "0.75rem",
  baseRem1: "1rem",
  baseRem125: "1.25rem",
  baseRem15: "1.5rem",
  baseRem2: "2rem",
  baseRem3: "3rem",
  baseRem4: "4rem",
};

const sysSizes = {
  base: sysBaseSizes,
  componentsInputMinHeight: 0,
  componentsButtonSmallPy: sysBaseSizes.baseRem025,
  componentsButtonGap: sysBaseSizes.baseRem050,
  componentsButtonMediumPy: sysBaseSizes.baseRem050,
  componentsInputGap: sysBaseSizes.baseRem050,
  componentsInputPy: sysBaseSizes.baseRem050,
  componentsButtonSmallPx: sysBaseSizes.baseRem1,
  componentsInputPx: sysBaseSizes.baseRem1,
  componentsIconSizeSmall: "1.125rem",
  componentsButtonMediumPx: sysBaseSizes.baseRem15,
  componentsIconSize: sysBaseSizes.baseRem15,
  componentsButtonSmallMinHeight: "2.125rem",
  componentsButtonMediumMinHeight: "2.5rem",
  contentPt: sysBaseSizes.baseFixed2,
  contentPb: sysBaseSizes.baseFixed4,
  contentPx: "8.5rem",
  spacingFixedXs: sysBaseSizes.baseFixed025,
  spacingFixedSm: sysBaseSizes.baseFixed050,
  spacingFixedMd: sysBaseSizes.baseFixed1,
  spacingFixedLg: sysBaseSizes.baseFixed15,
  spacingFixedXl: sysBaseSizes.baseFixed2,
  spacingRemXs: sysBaseSizes.baseRem025,
  spacingRemSm: sysBaseSizes.baseRem050,
  spacingRemMd: sysBaseSizes.baseRem1,
  spacingRemLg: sysBaseSizes.baseRem15,
  spacingRemXl: sysBaseSizes.baseRem2,
  radiusXs: sysBaseSizes.baseFixed025,
  radiusSm: sysBaseSizes.baseFixed050,
  radiusMd: sysBaseSizes.baseFixed1,
  radiusLg: sysBaseSizes.baseFixed15,
  radiusXl: sysBaseSizes.baseFixed2,
  radiusInfinite: "800px",
};

const sysSizing = { ...sysSizes };

export default sysSizing;
