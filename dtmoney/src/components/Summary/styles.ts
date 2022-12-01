import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  .totalSummary {
    background-color: #33cc95;
  }

  div {
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #363f5f;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }
  }
`
