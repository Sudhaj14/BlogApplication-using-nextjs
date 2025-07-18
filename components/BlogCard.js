'use client';

export default function BlogCard({ blog, isAdmin = false, onEdit, onDelete }) {
  return (
    <div
      style={{
        background: '#1f1f23',
        borderRadius: '12px',
        padding: '1.5rem',
        margin: '1rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        color: '#fff',
        transition: 'transform 0.3s ease',
        width: '300px',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#e0e0ff' }}>{blog.title}</h3>
      <p style={{ marginBottom: '0.75rem', color: '#ccc' }}>{blog.content}</p>
      <small style={{ display: 'block', marginBottom: '1rem', color: '#999' }}>
        By: <span style={{ color: '#a0ffe4' }}>{blog.author}</span>
      </small>

      {isAdmin && (
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={onEdit}
            style={{
              background: 'linear-gradient(to right, #4facfe, #00f2fe)',
              color: '#000',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            style={{
              background: 'transparent',
              color: '#ff6b6b',
              border: '1px solid #ff6b6b',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
