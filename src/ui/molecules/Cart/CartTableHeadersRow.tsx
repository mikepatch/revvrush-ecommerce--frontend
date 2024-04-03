type CartTableHeadersRowProps = {
	headers: string[];
};

export const CartTableHeadersRow = ({ headers }: CartTableHeadersRowProps) => {
	return (
		<tr>
			{headers.map((header) => (
				<th key={header} className="px-4 py-4 text-left">
					{header}
				</th>
			))}
		</tr>
	);
};
