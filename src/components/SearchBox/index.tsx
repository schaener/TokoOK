import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledCategoryName,
  StyledSearchButton,
  SearchWrapper
} from "./search-box.style";
import { SearchIcon } from "../../assets/icon/SearchIcon";

interface Props {
  onEnter?: (e: React.SyntheticEvent) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name: string;
  minimal?: boolean;
  className?: string;
  showButtonText?: boolean;
  shadow?: string;
  [key: string]: unknown;
  categoryType?: any;
  isCenter?: boolean;
  defaultValue?: any;
}

const SearchBox: React.FC<Props> = ({
  onEnter,
  onChange,
  value,
  name,
  minimal,
  categoryType,
  buttonText,
  className,
  showButtonText = true,
  shadow,
  isCenter,
  defaultValue,
  ...rest
}) => {
  const renderSearchBox = () => (
    <StyledForm
      onSubmit={onEnter}
      className={className}
      boxShadow={shadow}
      minimal={minimal}
    >
      {minimal ? (
        <>
          <SearchIcon style={{ marginLeft: 16, marginRight: 16 }} />
          <StyledInput
            type="search"
            onChange={onChange}
            name={name}
            className="border-search"
            defaultValue={defaultValue}
            {...rest}
          />
        </>
      ) : (
        <>
          <StyledCategoryName>{categoryType}</StyledCategoryName>
          <StyledInput
            type="search"
            onChange={onChange}
            value={value}
            name={name}
            className="border-search"
            defaultValue={defaultValue}
            {...rest}
          />

          <StyledSearchButton>
            <>
              <SearchIcon style={{ marginRight: 10 }} />
              {showButtonText && buttonText}
            </>
          </StyledSearchButton>
        </>
      )}
    </StyledForm>
  );

  if (isCenter) {
    return <SearchWrapper>{renderSearchBox()}</SearchWrapper>;
  }

  return renderSearchBox();
};

export default SearchBox;
