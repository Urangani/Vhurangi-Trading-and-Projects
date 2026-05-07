# Refactor: modular components for pages/

## Step 1 — Create component folder structure
- [ ] Create `src/components/home/*`:
  - [ ] `ServiceCard.tsx`
  - [ ] `TestimonialCard.tsx`
  - [ ] `ProjectShowcase.tsx`
- [ ] Create `src/components/services/*`:
  - [ ] `EnhancedServiceCategory.tsx`
  - [ ] `ServiceDetailCard.tsx`
  - [ ] `servicesData.ts`
- [ ] Create `src/components/about/*`:
  - [ ] `ValueCard.tsx`
  - [ ] `TeamCard.tsx`
- [ ] Create `src/components/contact/*`:
  - [ ] `InfoCard.tsx`

## Step 2 — Refactor pages to use components
- [ ] Update `src/pages/HomePage.tsx` to import and use the extracted components (remove inline component definitions).
- [ ] Update `src/pages/ServicesPage.tsx` to import extracted components + data (remove inline component/data definitions).
- [ ] Update `src/pages/AboutPage.tsx` to import extracted components (remove inline component definitions).
- [ ] Update `src/pages/ContactPage.tsx` to import extracted components (remove inline component definitions).

## Step 3 — (Optional) Move GSAP animation logic into hooks
- [ ] Create `src/hooks/useHomePageAnimations.ts` and use it in `HomePage`
- [ ] Create `src/hooks/useServicesPageAnimations.ts` and use it in `ServicesPage`
- [ ] Create `src/hooks/useAboutPageAnimations.ts` and use it in `AboutPage`
- [ ] Create `src/hooks/useContactPageAnimations.ts` and use it in `ContactPage`
  - [ ] Reduce reliance on global class selectors where practical
  - [ ] Ensure ScrollTrigger cleanup is correct and localized

## Step 4 — Validate
- [ ] Run `npm run build` (or `npm run lint` if available)
- [ ] Quick manual route smoke test (Home/Services/About/Contact)
