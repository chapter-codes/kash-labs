import { handleSearch } from "@/app/portfolio/actions";
import { TSearchFormState } from "@/app/portfolio/types";
import Image from "next/image";
type SearchProps = {
  setKeyEntered: React.Dispatch<React.SetStateAction<boolean>>;
  action: any,
  state: TSearchFormState;
};
function Search({ action, state, setKeyEntered }: SearchProps) {
  return (
    <form
      action={action}
      className="flex justify-between items-center  h-11 bg-card px-3 rounded-full"
    >
      <label htmlFor="search" className="flex justify-between  ">
        <input
          type="text"
          id="search"
          name="search"
          className="h-full outline-0"
          placeholder="Search"
          defaultValue={state.query ?? ""}
          onChange={({ target: { value } }) =>
            value.length > 0 ? setKeyEntered(true) : setKeyEntered(false)
          }
        />
      </label>
      <button type="submit" className="">
        <Image
          src="/icons/search.png"
          width={21}
          height={21}
          alt="imagge of a magnifying glass representing search."
        />
      </button>
    </form>
  );
}

export default Search;
