import React, { 
  useRef, 
  useEffect, 
  Dispatch,
  SetStateAction } from "react";
import { 
  StyledCheckout,
  StyledCheckoutContainer,
  StyledCheckoutHeading,
  StyledCheckoutBlock,
  StyledCheckoutPriceContainer,
  StyledCheckoutPrice,
  StyledCheckoutGoBack } from "./checkout.styled";
import { DarkText } from "@/styled/shared/text.styled";
import { StyledCreatePlan } from "@/components/shared/createPlan/createPlan.styled";
import { Summary } from "../summary";
import { useTrapFocus } from "@/lib/hooks";
import { 
  checkoutVariant,
  customSwipeUpVariant } from "@/motion";


interface CheckoutShape {
  hideModal: Dispatch<SetStateAction<boolean>>
}

const Checkout = ({hideModal}: CheckoutShape) =>{
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [ firstControl, lastControl, registerTrap ] = useTrapFocus<HTMLButtonElement, HTMLButtonElement>();

  const handleHideModal = () => {
    requestAnimationFrame(() =>{
      if ( !modalRef.current?.contains(document.activeElement)) {
        hideModal(false);
      }
    })
  };

  useEffect(() =>{
    if ( modalRef.current ) {
      modalRef.current.focus();
    }
  }, [])

  return (
    <StyledCheckoutContainer 
      initial="initial"
      animate="visible"
      exit="hidden"
      variants={checkoutVariant}>
      <StyledCheckout 
        tabIndex={-1}
        onBlur={handleHideModal}
        ref={modalRef}
        onKeyDown={ event => registerTrap(event, 0)}
        variants={customSwipeUpVariant("20%", .75)}>
        <StyledCheckoutHeading>Order Summary</StyledCheckoutHeading>
        <StyledCheckoutBlock>
          <Summary />
          <DarkText>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </DarkText>
          <StyledCheckoutPriceContainer>
            <StyledCheckoutPrice>$14.00/mo</StyledCheckoutPrice>
            <StyledCreatePlan as="button" 
            type="submit"
            ref={firstControl}>
              Checkout {` `}s
              <span> {`  - $14.00/mo`}</span>
            </StyledCreatePlan>
          </StyledCheckoutPriceContainer>
          <StyledCheckoutGoBack ref={lastControl}
            onClick={() => hideModal(false)}>Go back</StyledCheckoutGoBack>
        </StyledCheckoutBlock>
      </StyledCheckout>
    </StyledCheckoutContainer>
  );
}


export default Checkout;