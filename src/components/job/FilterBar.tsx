import React, { useState } from "react";

interface Props {
  onSearch: (filters: {
    tecnology?: string;
    level?: string;
    isRemote?: boolean;
    location?: string;
  }) => void;
}

export function FilterBar({ onSearch }: Props) {
  const [tecnology, setTecnology] = useState("");
  const [level, setLevel] = useState("");
  const [isRemote, setIsRemote] = useState<boolean| undefined>(undefined);
  const [location, setLocation] = useState("");

  function handleSearch(e: React.SubmitEvent) {
    e.preventDefault();
    onSearch({
      tecnology: tecnology || undefined,
      level: level || undefined,
      isRemote,
      location: location || undefined,
    });
  }
  return (
    <form onSubmit={handleSearch} style = {styles.form}>
      <input
        placeholder="Tecnology"
        value={tecnology}
        onChange={(e) => setTecnology(e.target.value)}
      />
      <input
        placeholder="Level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label>
        Work modality

        <select value={isRemote === undefined ? "" : isRemote.toString()} onChange = 
        {e=> 
            {const value = e.target.value
                 if(value==="")setIsRemote(undefined)
                 else setIsRemote(value==="true")
            }
        }>
            <option value="">All</option>
            <option value="true">Remote</option>
            <option value="false">On site</option>

        </select>
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

const styles: { form: React.CSSProperties } = {
  form: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
    flexWrap: "wrap"
  }
};
